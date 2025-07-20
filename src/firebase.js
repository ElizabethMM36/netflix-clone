// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password) =>{
try{
    const res = await createUserWithEmailAndPassword(auth,email,password); //in the res we will get the created user
   const user = res.user;
   await addDoc (collection(db,"user"),{
    uid:user.uid,
    name,
    authProvider:"local",
    email
   }) // to store user in database






}catch(error){
    console.log(error);
    toast.error(error.code.split('/')[1].replace(/-/g,' ')); // to remove the firebase error code and replace it with a user friendly message
    
}
}
const login = async (email,password) => {
    try {
        await signInWithEmailAndPassword(auth,email,password);
               
    } catch (error) {
      console.log(error);
      toast.error(error.code.split('/')[1].replace(/-/g,' ')); // to remove the firebase error code and replace it with a user friendly message
    }
}
const logout =  () => {
    signOut(auth);
}

export {auth,db,signup,login,logout};
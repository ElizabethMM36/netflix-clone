// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDxYCBvUTvNIqi8xt5KfmDlUd5SOnexavU",
  authDomain: "netflix-clone-12f49.firebaseapp.com",
  projectId: "netflix-clone-12f49",
  storageBucket: "netflix-clone-12f49.firebasestorage.app",
  messagingSenderId: "655339849493",
  appId: "1:655339849493:web:b3a9d9ed275c2e03604b1c"
};

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
    alert(error);
}
}
const login = async (email,password) => {
    try {
        await signInWithEmailAndPassword(auth,email,password);
               
    } catch (error) {
      console.log(error);
      alert(error);  
    }
}
const logout =  () => {
    signOut(auth);
}

export {auth,db,signup,login,logout};
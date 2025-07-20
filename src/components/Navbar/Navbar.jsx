import React ,{useEffect, useRef} from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { logout } from '../../firebase';

const Navbar = () => {
const navRef = useRef();

useEffect(() => {
  window.addEventListener('scroll', () => {
    if(window.scrollY >= 80){
      navRef.current.classList.add('nav-dark')
    }else{
      navRef.current.classList.remove('nav-dark')
    }
  })
},[]);
// The useEffect hook is used to add a scroll event listener to the window. When the user scrolls down 80 pixels or more, it adds a 'nav-dark' class to the navbar, changing its style. When the user scrolls back up, it removes the 'nav-dark' class.
  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="Netflix Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="search icon" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="bell icon" className='icons' />
        <div className="navbar-profile">
          <img src={profile_img} alt="profile" className='profile' />
          <img src={caret_icon} alt="caret icon" className="icons" />
          <div className= "dropdown">
            <p onClick={() =>{logout()}}>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

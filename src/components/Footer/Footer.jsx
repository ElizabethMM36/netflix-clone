import React from 'react'
import './Footer.css'
import youtube_icon from  '../../assets/youtube_icon.png'
import twitter_icon from  '../../assets/twitter_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt=""/>
        <img src={twitter_icon} alt=""/>
      </div>
      
    </div>
  )
}

export default Footer

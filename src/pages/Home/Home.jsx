import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>the mysterious disappearance of a young boy named Will Byers, which leads his friends, family, and the local authorities to uncover a series of supernatural events linked to a clandestine government experiment</p>
          <div className="hero-btns"> 
           <button className="btn"> <img src={play_icon} alt=""/>Play</button>
           <button className="btn dark-btn"> <img src={info_icon} alt=""/>More Info</button>
          </div>
          <TitleCards />
        </div>

      </div>
      <div className="more-cards">
        <TitleCards title={"We Think You'll Love These"} category={"popular"}/>
        <TitleCards title={"Need a Laugh"} category={"now_playing"}/>
        <TitleCards title={"Only on Netflix"} category={"upcoming"}/>
        <TitleCards title={"Top Picks"} category={"top_rated"}/>

      </div>
      <Footer />
    </div>
  )
}

export default Home

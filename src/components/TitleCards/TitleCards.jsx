import React,{useEffect, useRef,useState } from 'react'
import { Link } from 'react-router-dom'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data.js'

const TitleCards = ({title,category}) => {
  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODY2NzViMWMzYjhlMTc0ZDM3MWQzOWU5NTgzNTc0NiIsIm5iZiI6MTc1MzAwNjY5NC40OTcsInN1YiI6IjY4N2NjMjY2Yzc0YjMyN2Y1YTM4ZDY3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZvAqNkidgFHOOHWyFic_Mea7EXQH6UcGCYwal9TNVSU'
  }
};


const handleWheel = (event) =>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}
//events.deltaY conta
// ins the amount of vertical scroll and cardsRef is a reference object that is used to catch the DOM object like dic
useEffect(() => {

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  const cards = cardsRef.current;
  cards.addEventListener('wheel', handleWheel);

  return () => cards.removeEventListener('wheel', handleWheel);
}, []);

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index) =>{
          return <Link to={`/player/${card.id}`}className="card" key={index}>

            <img src ={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p> {card.original_title}</p>
          </Link>

        })}
      </div>
    </div>
  )
}

export default TitleCards

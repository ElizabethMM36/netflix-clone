import React,{useEffect, useRef} from 'react'

import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data.js'

const TitleCards = ({title,category}) => {

  const cardsRef = useRef();
const handleWheel = (event) =>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}
//events.deltaY contains the amount of vertical scroll and cardsRef is a reference object that is used to catch the DOM object like dic
useEffect(() => {
  const cards = cardsRef.current;
  cards.addEventListener('wheel', handleWheel);

  return () => cards.removeEventListener('wheel', handleWheel);
}, []);

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card,index) =>{
          return <div className="card" key={index}>

            <img src ={card.image} alt="" />
            <p> {card.name}</p>
          </div>

        })}
      </div>
    </div>
  )
}

export default TitleCards

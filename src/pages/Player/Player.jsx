import React, { useEffect ,useState} from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/black_arrow_icon.png'
import { useParams } from 'react-router-dom'
const Player = () => {
  const {id} = useParams();
  const [apiData, setApiData] = useState({name:"",
    key:"",
    published_at:"",
    typeof:""
  });
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODY2NzViMWMzYjhlMTc0ZDM3MWQzOWU5NTgzNTc0NiIsIm5iZiI6MTc1MzAwNjY5NC40OTcsInN1YiI6IjY4N2NjMjY2Yzc0YjMyN2Y1YTM4ZDY3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZvAqNkidgFHOOHWyFic_Mea7EXQH6UcGCYwal9TNVSU'
  }
};

useEffect(() => {

fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));

}, [id]);



  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="Movie Poster"  />
      <iframe width='90%'height='90%'
      src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer'frameBorder='0'allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player

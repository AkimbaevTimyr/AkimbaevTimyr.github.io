import React, {FC} from 'react'
import {Routes,Link} from 'react-router-dom'
import FilmsComponents from '../../FilmsComponents'
import bestMoviesImg from '../../../images/250bestmovies.png'
import popularFilmsImg from '../../../images/popularfilms.png'
const Films: FC  = () => {
  return (
    <div className='items-center'>
        <FilmsComponents img={bestMoviesImg} title="Лучшие фильмы" subtitle='Лучшие фильмы' link="/films/bestmovies"/>
        <FilmsComponents img={popularFilmsImg} title="Популярные фильмы" subtitle='Популярные фильмы' link="/films/popular"/>
        {/* <Link to="/films/popular">
          <h1>Популярные</h1>
        </Link>
        
        <Link to="/films/nowplayingfilms">
          <h1>Сейчас смотрят</h1>
        </Link>
        <Link to="/films/upcomingfilms">
          <h1>Скоро на экранах</h1>
        </Link> */}
    </div>
  )
}

export default  Films
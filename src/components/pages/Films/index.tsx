import {FC} from 'react'
import bestMoviesImg from '../../../images/250bestmovies.png'
import popularFilmsImg from '../../../images/popularfilms.png'
import movies from '../../../images/movies.png'
import FilmsComponents from '../../FilmsComponents'

const Films: FC  = () => {
  return (
    <div className='items-center'>
        <FilmsComponents img={movies} title="Все фильмы" subtitle='Все фильмы' link='/films/allfilms' />
        <FilmsComponents img={bestMoviesImg} title="Лучшие фильмы" subtitle='Лучшие фильмы' link="/films/bestmovies"/>
        <FilmsComponents img={popularFilmsImg} title="Популярные фильмы" subtitle='Популярные фильмы' link="/films/popular"/>
    </div>
  )
}

export default  Films
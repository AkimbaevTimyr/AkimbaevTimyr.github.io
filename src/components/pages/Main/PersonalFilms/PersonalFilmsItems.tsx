import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../../hooks/redux'
import { IMovie } from '../../../../types/MoviesTypes'
import FilmItem from '../../../FilmItem/FilmItem'
import Loading from '../../../Loading/loading'
import styles from '../style.module.css'




const PersonalFilmsItems: FC = () => {
    const { personalMovies } = useAppSelector(state => state.movies)
    return (
         <div className='container'>
         {personalMovies.length === 0 ? <Loading /> : (<>
             <div className={styles.items}>
                 {personalMovies.map((el: IMovie) => (
                     <FilmItem key={el.id} id={el.id} img={el.poster_path} title={el.title} vote_average={el.vote_average} release_date={el.release_date} type="фильм"/>
                 ))}
             </div>
         </>
         )}
     </div>
    )
}

export default PersonalFilmsItems
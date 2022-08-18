import React, { FC } from 'react'
import { useAppSelector } from '../../../../hooks/redux'
import { IMovie } from '../../../../types/MoviesTypes'
import FilmItem from '../../../FilmItem/FilmItem'
import Loading from '../../../Loading/loading'
import styles from '../style.module.css'




const PersonalFilmsItems: FC = () => {
    const { personalMovies } = useAppSelector(state => state.movies)
    return (
        <div className={styles.films}>       
            <div className={styles.back}>
                <svg className={styles.svg} stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>
                Назад
            </div> 
            <div className={styles.container}>
         {personalMovies.length === 0 ? <Loading /> : (<>
             <div className={styles.items}>
                 {personalMovies.map((el: IMovie) => (
                     <FilmItem key={el.id} id={el.id} img={el.poster_path} title={el.title} vote_average={el.vote_average} release_date={el.release_date} type="фильм"/>
                 ))}
             </div>
         </>
         )}
     </div>
     </div>
    )
}

export default PersonalFilmsItems
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../../hooks/redux'
import { IMovie } from '../../../../types/MoviesTypes'
import { ITvShows } from '../../../../types/TvShowTypes'
import FilmItem from '../../../FilmItem/FilmItem'
import Loading from '../../../Loading/loading'
import styles from '../style.module.css'

const PersonalSeriesItem: FC = () => {
    const { personalSeries } = useAppSelector(state => state.movies)
    return (
        <div className={styles.container}>
             {personalSeries.length === 0 ? <Loading /> : (<>
             <div className={styles.items}>
                 {personalSeries.map((el: ITvShows) => (
                     <FilmItem key={el.id} id={el.id} img={el.poster_path} title={el.name} vote_average={el.vote_average} release_date={el.first_air_date} type="сериал"/>
                 ))}
             </div>
         </>)}
        </div>
    )
}

export default PersonalSeriesItem
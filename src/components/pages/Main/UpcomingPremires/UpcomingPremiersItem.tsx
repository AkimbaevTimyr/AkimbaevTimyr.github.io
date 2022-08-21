import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../../hooks/redux'
import { IMovie } from '../../../../types/MoviesTypes'
import Loading from '../../../Loading/loading'
import FilmItem from '../../../FilmItem/FilmItem'
import styles from '../style.module.css'

function UpcomingPremiersItem() {
  const { upcomingPremiers } = useAppSelector(state => state.movies)
  return (
    <div className={styles.container}>
      {upcomingPremiers.length === 0 ? <Loading /> : (<>
        <div className={styles.items}>
          {upcomingPremiers.map((el: IMovie) => (
            <FilmItem key={el.id} id={el.id} img={el.poster_path} title={el.title} vote_average={el.vote_average} release_date={el.release_date} type="movie" />
          ))}
        </div>
      </>)}
    </div>
  )
}

export default UpcomingPremiersItem
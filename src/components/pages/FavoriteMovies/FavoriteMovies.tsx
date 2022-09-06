import {  FC, useEffect } from 'react'
import { getUser } from '../../../helpers/getUser/getUser'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import {getFavoriteMovies } from '../../../store/actions/MovieActionCreator'
import { IFilmItemMovie } from '../../../types/MoviesTypes'
import FilmItem from '../../shared/FilmItem/FilmItem'
import Loading from '../../shared/Loading/Loading'
import styles from './style.module.css'

const WatchList: FC = () => {
  const {email} = getUser()
  const {favoriteMovies} = useAppSelector(state => state.movies)
  const dispatch: any= useAppDispatch();
  useEffect(()=>{
    dispatch(getFavoriteMovies(email))
  },[])
  return (
    <div className={styles.items}>
        {favoriteMovies.length == 0 ? <Loading /> : (favoriteMovies.map((el:  IFilmItemMovie) =>(
          <FilmItem  key={el.id} id={el.id} img={el.poster_path} title={el.original_name || el.title} vote_average={el.vote_average} release_date={el.first_air_date || el.release_date} type={el.type}/>
        )))}
    </div>
  )
}

export default WatchList;

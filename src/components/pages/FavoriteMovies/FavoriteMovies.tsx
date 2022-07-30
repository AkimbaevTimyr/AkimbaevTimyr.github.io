import {  FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { getFavoriteMovie } from '../../../http/favoritesMovie'
import { addFavoriteMovies } from '../../../store/actions/MovieActionCreator'
import FilmItem from '../../FilmItem/FilmItem'
import './style.css'
const WatchList: FC = () => {
  const {user} = useAppSelector(state => state.user)
  const {favoriteMovies} = useAppSelector(state => state.movies)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    getFavoriteMovie(user.email).then((data) => dispatch(addFavoriteMovies(data)))
  },[])
  return (
    <div className='items'>
      {favoriteMovies.map((el: any) =>(
        <FilmItem  id={el.id} img={el.poster_path} title={el.original_name || el.title} vote_average={el.vote_average} release_date={el.first_air_date || el.release_date} type={el.type}/>
      ))}
    </div>
  )
}

export default WatchList;

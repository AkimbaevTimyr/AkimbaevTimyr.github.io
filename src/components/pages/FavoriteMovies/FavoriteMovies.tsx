import {  FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import {getFavoriteMovies } from '../../../store/actions/MovieActionCreator'
import FilmItem from '../../FilmItem/FilmItem'
import Loading from '../../Loading/loading'
import './style.css'
const WatchList: FC = () => {
  const {user} = useAppSelector(state => state.user)
  const {favoriteMovies} = useAppSelector(state => state.movies)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getFavoriteMovies(user.email))
  },[])
  return (
    <div className='items'>
      {favoriteMovies.length == 0 ? <Loading /> : (favoriteMovies.map((el: any) =>(
        <FilmItem  key={el.id} id={el.id} img={el.poster_path} title={el.original_name || el.title} vote_average={el.vote_average} release_date={el.first_air_date || el.release_date} type={el.type}/>
      )))}
    </div>
  )
}

export default WatchList;

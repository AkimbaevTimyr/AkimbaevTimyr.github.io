import {  FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getFavoriteMovie } from '../../http/favoritesMovie'
import { addFavoriteMovies } from '../../store/actions/MovieActionCreator'
import { IFavoriteMovie, IMovie } from '../../types/MoviesTypes'
import FavoriteItem from '../FavoriteItem'

const WatchList: FC = () => {
  const {user} = useAppSelector(state => state.user)
  const {favoriteMovies} = useAppSelector(state => state.movies)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    getFavoriteMovie(user.email).then((data) => dispatch(addFavoriteMovies(data)))
  },[])
  return (
    <div className='flex justify-center flex-wrap'>
      {favoriteMovies.map((el: IFavoriteMovie ) =>(
        <FavoriteItem id={el.id} poster_path={el.poster_path} title={el.original_name} vote_average={el.vote_average} release_date={el.release_date} overview={el.overview} favorite={el.favorite}/>
      ))}
    </div>
  )
}

export default WatchList;
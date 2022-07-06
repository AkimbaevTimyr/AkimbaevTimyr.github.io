import React, { useEffect, useState, FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getFavoriteMovie } from '../../http/favoritesMovie'
import { addFavoriteMovies } from '../../store/actions/MovieActionCreator'
import { IFavoriteMovie, IMovie } from '../../types/MoviesTypes'
import MoviesItem from '../MoviesItem'

const WatchList: FC = () => {
  const {user} = useAppSelector(state => state.user)
  const {favoriteMovies} = useAppSelector(state => state.movies)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    getFavoriteMovie(user.email).then((data) => dispatch(addFavoriteMovies(data)))
  },[])
  return (
    <div>
      {favoriteMovies.map((el: IFavoriteMovie ) =>(
        <MoviesItem id={el.id} poster_path={el.poster_path} title={el.title} vote_average={el.vote_average} release_date={el.release_date} overview={el.overview} />
      ))}
    </div>
  )
}

export default WatchList;
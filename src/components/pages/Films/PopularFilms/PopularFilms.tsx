import React, { useEffect, FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { addPopularMovies } from '../../../../store/actions/MovieActionCreator'
import axios from 'axios'
import Pagination from '../../../pagination.tsx/pagination'
import Loading from '../../../Loading/loading'
import { IMovie } from '../../../../types/MoviesTypes'
import FilmItem from '../../../FilmItem/FilmItem'
import "./style.css"
const PopularFilms: FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const getMovies = async () => {
      let { data } = await axios.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US&page=1')
      dispatch(addPopularMovies(data.results))
    }
    getMovies()
  }, [])
  const changePage = (page: number) => {
    const getMovies = async () => {
      let { data } = await axios.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US&page=${page}`)
      dispatch(addPopularMovies(data.results))
    }
    getMovies()
  }
  const { popularMovies} = useAppSelector(state => state.movies)
  return (
    <>
      {popularMovies.length === 0 ? <Loading /> : (<>
        <div className='items'>
          {popularMovies.map((el: IMovie) => (
             <FilmItem  id={el.id} img={el.poster_path} title={el.title} vote_average={el.vote_average} release_date={el.release_date} type="фильм"/>
          ))}
        </div> <Pagination changePage={(page: number) => changePage(page)} />
      </>
      )}
    </>
  )
}

export default PopularFilms
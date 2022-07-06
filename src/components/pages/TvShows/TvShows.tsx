import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../hooks/redux'
import axios from 'axios'
import { addTvShows } from '../../../store/actions/TvShowActionCreator'
import { useAppSelector } from '../../../hooks/redux'
import Loading from '../../Loading/loading'
import { ITvShows } from '../../../types/TvShowTypes'
import Pagination from '../../pagination.tsx/pagination'
import MoviesItem from '../../MoviesItem'

const TvShows = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
      const getMovies = async () => {
        let { data } = await axios.get<any>('https://api.themoviedb.org/3/tv/popular?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US&page=1')
        dispatch(addTvShows(data.results))
      }
      getMovies()
    }, [])
    const changePage = (page: number) => {
      const getMovies = async () => {
        let { data } = await axios.get<any>(`https://api.themoviedb.org/3/tv/popular?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US&page=${page}`)
        dispatch(addTvShows(data.results))
      }
      getMovies()
    }
    const { popularTvShows } = useAppSelector(state => state.tvShows)
  return (
    <>
      {popularTvShows.length === 0 ? <Loading /> : (<>
        <div className='flex flex-wrap mr-10 justify-center'>
          {popularTvShows.map((el: ITvShows) => (
            <MoviesItem key={el.id} id={el.id} title={el.original_name} poster_path={el.poster_path} release_date={el.release_date} vote_average={el.vote_average} overview={el.overview} />
          ))}
        </div> <Pagination changePage={(page: number) => changePage(page)}/>
      </>
      )}
    </>
  )
}

export default TvShows
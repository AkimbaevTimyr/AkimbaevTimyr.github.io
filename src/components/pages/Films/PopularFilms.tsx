import React, { useEffect, FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { addPopularMovies } from '../../../store/actions/MovieActionCreator'
import axios from 'axios'
import Pagination from '../../pagination.tsx/pagination'
import Loading from '../../Loading/loading'
import MoviesItem from '../../MoviesItem'
import { IMovie } from '../../../types/MoviesTypes'

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
  const { popularMovies, favoriteMovies } = useAppSelector(state => state.movies)
  function changeFilmFavorite(): any {
    return popularMovies.map((el: any) => {
        if (favoriteMovies.some(({ id }: any) => id == el.id)) {
            return <MoviesItem key={el.id} id={el.id} title={el.title} poster_path={el.poster_path} release_date={el.release_date} vote_average={el.vote_average} overview={el.overview} favorite={true} />
        } else {
            return <MoviesItem key={el.id} id={el.id} title={el.title} poster_path={el.poster_path} release_date={el.release_date} vote_average={el.vote_average} overview={el.overview} favorite={false} />
        }
    })
}
  return (
    <>
      {popularMovies.length === 0 ? <Loading /> : (<>
        <div className='flex flex-wrap mr-10 justify-center'>
          {changeFilmFavorite()}
        </div> <Pagination changePage={(page: number) => changePage(page)} />
      </>
      )}
    </>
  )
}

export default PopularFilms
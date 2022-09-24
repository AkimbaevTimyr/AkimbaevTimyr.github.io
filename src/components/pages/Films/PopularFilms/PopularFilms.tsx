import React, { useEffect, FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import Pagination from '../../../shared/UI/Pagination.tsx/Pagination'
import Loading from '../../../shared/UI/Loading/Loading'
import { IMovie } from '../../../../types/MoviesTypes'
import FilmItem from '../../../shared/FilmItem/FilmItem'
import { getPopularMovies } from '../../../../store/actions/MovieActionCreator'
import styles from './style.module.css'
import Navigation from '../../../shared/Navigation/Navigation'

const PopularFilms: FC = () => {
  const dispatch: any = useAppDispatch()
  const changePage = (page: number) => {
    dispatch(getPopularMovies(page))
  }
  const { popularMovies} = useAppSelector(state => state.movies)
  return (
    <>
      {popularMovies.length === 0 ? <Loading /> : (<>
        <div className={styles.items}>
          {popularMovies.map((el: IMovie) => (
             <FilmItem  key={el.id} id={el.id} img={el.poster_path} title={el.title} vote_average={el.vote_average} release_date={el.release_date} type="movie"/>
          ))}
        </div> <Pagination changePage={(page: number) => changePage(page)} />
        <br/><br/>
      </>
      )}
    </>
  )
}

export default PopularFilms
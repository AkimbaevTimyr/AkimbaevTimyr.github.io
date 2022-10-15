import React, { FC, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { getPopularMovies } from '../../../../store/actions/MovieActionCreator'
import { FixMe } from '../../../../types/Types'
import Item from '../Item'

const PopularFilms: FC = () => {
  const dispatch: FixMe = useAppDispatch()
  const { popularMovies} = useAppSelector(state => state.movies)
  const changePage = useCallback((page: number) => {
    dispatch(getPopularMovies(page))
  }, [])
  return (
    <>
      <Item data={popularMovies} changePage={changePage} type="movie"/>
    </>
  )
}

export default PopularFilms
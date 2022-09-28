import React, {  FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { getPopularMovies } from '../../../../store/actions/MovieActionCreator'
import Item from '../Item'

const PopularFilms: FC = () => {
  const dispatch: any = useAppDispatch()
  const changePage = (page: number) => {
    dispatch(getPopularMovies(page))
  }
  const { popularMovies} = useAppSelector(state => state.movies)
  return (
    <>
      <Item data={popularMovies} changePage={(page)=> changePage(page)} type="movie"/>
    </>
  )
}

export default PopularFilms
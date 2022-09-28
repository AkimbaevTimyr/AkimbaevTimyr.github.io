import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { getBestMovies } from '../../../../store/actions/MovieActionCreator'
import Item from '../Item'

const BestMovies: FC = () => {
  const dispatch: any = useAppDispatch()
  const { bestMovies } = useAppSelector(state => state.movies)

  const changePage = async (page: number) => {
    dispatch(getBestMovies(page))
  }
  return (
    <>
      <Item data={bestMovies} changePage={(page) => changePage(page)} type="movie" />
    </>
  )
}

export default BestMovies




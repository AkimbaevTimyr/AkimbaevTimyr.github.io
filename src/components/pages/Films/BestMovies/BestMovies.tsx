import React, { FC, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { getBestMovies } from '../../../../store/actions/MovieActionCreator'
import { FixMe } from '../../../../types/Types'
import Item from '../Item'

const BestMovies: FC = () => {
  const dispatch: FixMe = useAppDispatch()
  const { bestMovies } = useAppSelector(state => state.movies)

  const changePage = useCallback((page: number) => {
    dispatch(getBestMovies(page))
  }, [])
  return (
    <>
      <Item data={bestMovies} changePage={changePage} type="movie" />
    </>
  )
}

export default BestMovies




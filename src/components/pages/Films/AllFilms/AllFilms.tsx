import React, { useState, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import {  sortingMovies, } from '../../../../store/actions/MovieActionCreator'
import { FixMe } from '../../../../types/Types'
import Item from '../Item'
import LeftSide from './LeftSide/LeftSide'
import styles from './style.module.css'

const AllFilms = () => {
    const { allMovies } = useAppSelector(state => state.movies)
    const dispatch: FixMe = useAppDispatch()

    const [filmPage, setFilmPage] = useState<number>(1)
    const data: FixMe = localStorage.getItem('rating')?.split(',')
    
    const changePage = useCallback((page: number) => {
        dispatch(sortingMovies([page, data[0], data[1], data[2]]))
        setFilmPage(page)
    }, [filmPage])

    return (
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className={styles.movies}>
                <div className={styles.header}>
                    <h1>Все фильмы</h1>
                    <h2>Подборка фильмов всего мира</h2>
                </div>
                <div className={styles.body}>
                    <LeftSide filmPage={filmPage}  />
                    <div className={styles.allFilmsItem}>
                        <Item data={allMovies} changePage={changePage} type="movie"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllFilms
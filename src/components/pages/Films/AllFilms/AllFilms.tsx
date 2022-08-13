import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { getAllMovies, sortingMovies, } from '../../../../store/actions/MovieActionCreator'
import { IMovie } from '../../../../types/MoviesTypes'
import FilmItem from '../../../FilmItem/FilmItem'
import Loading from '../../../Loading/loading'
import Pagination from '../../../pagination.tsx/pagination'
import LeftSide from './LeftSide/LeftSide'
import styles from './style.module.css'

const AllFilms = () => {
    
    const { allMovies } = useAppSelector(state => state.movies)
    const dispatch: any = useAppDispatch()

    const [filmPage, setFilmPage] = useState<number>(1)
    const data: any = localStorage.getItem('rating')?.split(',')
    console.log(data)
    const changePage = async (page: number) => {
        dispatch(sortingMovies([page, data[0], data[1], data[2]]))
        setFilmPage(page)
    }

    return (
        <div className={styles.container}>
            <div className={styles.movies}>
                <div className={styles.header}>
                    <h1>Все фильмы</h1>
                    <h2>Подборка фильмов всего мира</h2>
                </div>
                <div className={styles.body}>
                    <LeftSide filmPage={filmPage}  />
                    <div className={styles.right}>
                        {allMovies?.length === 0 ? <div className={styles.loading}><Loading /></div> : (<>
                            <div className={styles.items}>
                                {allMovies?.map((el: IMovie) => (
                                    <FilmItem key={el.id} id={el.id} img={el.poster_path} title={el.title} vote_average={el.vote_average} release_date={el.release_date} type="фильм" />
                                ))}
                            </div> <Pagination changePage={(page: number) => changePage(page)} />
                        </>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllFilms
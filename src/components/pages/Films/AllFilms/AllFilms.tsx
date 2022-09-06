import { useState, } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import {  sortingMovies, } from '../../../../store/actions/MovieActionCreator'
import { IMovie } from '../../../../types/MoviesTypes'
import FilmItem from '../../../shared/FilmItem/FilmItem'
import Loading from '../../../shared/Loading/Loading'
import Pagination from '../../../shared/Pagination.tsx/Pagination'
import LeftSide from './LeftSide/LeftSide'
import styles from './style.module.css'

const AllFilms = () => {
    const { allMovies } = useAppSelector(state => state.movies)
    const dispatch: any = useAppDispatch()

    const [filmPage, setFilmPage] = useState<number>(1)
    const data: any = localStorage.getItem('rating')?.split(',')
    
    const changePage = async (page: number) => {
        dispatch(sortingMovies([page, data[0], data[1], data[2]]))
        setFilmPage(page)
    }

    return (
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className={styles.movies}>
                <div className={styles.header}>
                    <h1>Все фильмы</h1>
                    <h2>Подборка фильмов всего мира</h2>
                </div>
                <div className={styles.body}>
                    <LeftSide filmPage={filmPage}  />
                    <div>
                        {allMovies?.length === 0 ? <div className={styles.loading}><Loading /></div> : (<>
                            <div className={styles.items}>
                                {allMovies?.map((el: IMovie) => (
                                    <FilmItem key={el.id} id={el.id} img={el.poster_path} title={el.title} vote_average={el.vote_average} release_date={el.release_date} type="movie" />
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
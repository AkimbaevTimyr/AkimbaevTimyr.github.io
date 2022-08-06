import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { getAllMovies, sortingMoviesByRating } from '../../../../store/actions/MovieActionCreator'
import { IMovie } from '../../../../types/MoviesTypes'
import FilmItem from '../../../FilmItem/FilmItem'
import Loading from '../../../Loading/loading'
import Pagination from '../../../pagination.tsx/pagination'
import styles from './style.module.css'

const AllFilms = () => {

    const { allMovies } = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()

    const [filmPage, setFilmPage] = useState<number>(1)

    const [rating1, setRating1] = useState<number>(1)
    const [rating2, setRating2] = useState<number>(10)

    const [year1, setyear1] = useState<number>(1960)
    const [year2, setyear2] = useState<number>(2025)

    const [selectValue, setSelectValue] = useState<string>('Рейтингу')


    const changePage = async (page: number) => {
        dispatch(getAllMovies(page))
        setFilmPage(page)
    }

    const sortByRating = () => {
        dispatch(sortingMoviesByRating([rating1, rating2, filmPage]))
    }


    // useEffect(() => {
    //     getFilteredMovies(rating1, rating2, year1, year2, 1).then((data) => console.log(data))
    // } ,[])


    return (
        <div className={styles.container}>
            <div className={styles.movies}>
                <div className={styles.header}>
                    <h1>Все фильмы</h1>
                    <h2>Подборка фильмов всего мира</h2>
                </div>
                <div className={styles.body}>
                    <div className={styles.left}>
                        <h2 className={styles.left_header}>Сортирока по:</h2>
                        <select className={styles.select} onChange={(e) => setSelectValue(e.target.value)} name="hello">
                            <option>Рейтингу</option>
                            <option>Жанру</option>
                        </select>
                        {selectValue == 'Рейтингу' ? <><h2 className={styles.rating_header}>Рейтинг</h2>
                            <div className={styles.rating_inputs}>
                                <div className={styles.input_rating}>
                                    <p>От</p>
                                    <input onChange={e => setRating1(Number(e.target.value))} type="number" min="1" max="10" step="1" value={rating1 || ""} />
                                </div>
                                <div className={styles.input_rating}>
                                    <p>До</p>
                                    <input onChange={e => setRating2(Number(e.target.value))} type="number" min="1" max="10" step="1" value={rating2 || ""} />
                                </div>
                            </div><div className={styles.buttons}>
                                <button onClick={() => sortByRating()} className={styles.button_1}>Применить</button>
                            </div></> : ''}
                        {selectValue == 'Жанру' ? <><h2 className={styles.rating_header}>Жанр</h2>
                            <div className={styles.rating_inputs}>
                                <div className={styles.input_rating}>
                                    <p>От</p>
                                    <input type="number" min="1960" max="2025" step="1" />
                                </div>
                                <div className={styles.input_rating}>
                                    <p>До</p>
                                    <input type="number" min="1960" max="2025" step="1" />
                                </div>
                            </div>
                            <div className={styles.buttons}>
                                <button onClick={() => sortByRating()} className={styles.button_1}>Применить</button>
                            </div></> : ''}
                    </div>
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
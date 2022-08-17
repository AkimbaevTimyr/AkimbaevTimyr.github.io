import React, { useEffect, FC, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { IMovie } from '../../../../types/MoviesTypes'
import Pagination from '../../../pagination.tsx/pagination'
import Loading from '../../../Loading/loading'
import FilmItem from '../../../FilmItem/FilmItem'
import styles from './style.module.css'
import { getBestMovies} from '../../../../store/actions/MovieActionCreator'

const BestMovies: FC = () => {
    const dispatch: any = useAppDispatch()
    const { bestMovies } = useAppSelector(state => state.movies)

    const changePage = async (page: number) => {
        dispatch(getBestMovies(page))
    }

    return (
        <>
        {bestMovies.length === 0 ? <Loading /> : (<>
          <div className={styles.items}>
            {bestMovies.map((el: IMovie) => (
               <FilmItem  key={el.id} id={el.id} img={el.poster_path} title={el.title} vote_average={el.vote_average} release_date={el.release_date} type="movie"/>
            ))}
          </div> <Pagination changePage={(page: number) => changePage(page)} />
          <br/>
          <br/>
        </>
        )}
      </>
    )
}

export default BestMovies





// const filterMovies = async() =>{
//     // await getFilteredBestMovies(rating1, rating2, year1, year2).then()
//     axios.get('https://api.themoviedb.org/3/movie/278/reviews?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US&page=1').then(data => console.log(data))
// }

// <div className='container'>
        //     <div className={styles.movies}>
        //         {/* , */}
        //         <div className={styles.body}>
                    {/* <div className={styles.left}>
                        <h2 className={styles.rating_header}>Рейтинг</h2>
                        <div className={styles.rating_inputs}>
                            <div className={styles.input_rating}>
                                <p>От</p>
                                <input onChange={e => setRating1(Number(e.target.value))} type="number" min="1" max="10" step="1" value={rating1 || ""} />
                            </div>
                            <div className={styles.input_rating}>
                                <p>До</p>
                                <input onChange={e => setRating2(Number(e.target.value))} type="number" min="1" max="10" step="1" value={rating2 || ""} />
                            </div>
                        </div>
                        <h2 className={styles.rating_header}>Годы производства</h2>
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
                            <button  onClick={()=> sortByRating()} className={styles.button_1}>Применить</button>
                        </div>
                    </div> */}
                    {/* <div className={styles.right}>
                        {bestMovies.length === 0 ? <Loading /> : (<>
                            <div className={styles.items}>
                                {bestMovies.map((el: IMovie) => (
                                    <FilmItem key={el.id} id={el.id} img={el.poster_path} title={el.title} vote_average={el.vote_average} release_date={el.release_date} type="фильм" />
                                ))}
                            </div> <Pagination changePage={(page: number) => changePage(page)} />
                        </>
                        )}
                    </div>
                </div>
            </div>
        </div> */}
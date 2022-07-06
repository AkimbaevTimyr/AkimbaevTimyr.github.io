import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { addBestMovies } from '../../../store/actions/MovieActionCreator'
import { IMovie } from '../../../types/MoviesTypes'
import MoviesItem from '../../MoviesItem'
import Pagination from '../../pagination.tsx/pagination'
import axios from 'axios'
import Loading from '../../Loading/loading'

const BestMovies = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        const getMovies = async () => {
            let { data } = await axios.get<any>('https://api.themoviedb.org/3/movie/top_rated?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US&page=1')
            dispatch(addBestMovies(data.results))
        }
        getMovies()
    }, [])

    const changePage = (page: number) => {
        const getMovies = async () => {
            let { data } = await axios.get<any>(`https://api.themoviedb.org/3/movie/top_rated?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US&page=${page}`)
            dispatch(addBestMovies(data.results))
        }
        getMovies()
    }
    const { bestMovies, favoriteMovies } = useAppSelector(state => state.movies)

    function changeFavorite () {
        for (let i = 0; i <= bestMovies.length; i++) {
            if (favoriteMovies.length == 0) {
                return 1
            } else {
                if (bestMovies[i].title == favoriteMovies[i].title) {
                    console.log(bestMovies[i].title)
                }
            }
        }
        console.log('done')
    }
    return (
        <>
            {changeFavorite()}
            {bestMovies.length === 0 ? <Loading /> : (<>
                <div className='flex flex-wrap mr-10 justify-center'>
                    {bestMovies.map((el: IMovie) => (
                        <MoviesItem key={el.id} id={el.id} title={el.title} poster_path={el.poster_path} release_date={el.release_date} vote_average={el.vote_average} overview={el.overview} />
                    ))}
                </div> <Pagination changePage={(page: number) => changePage(page)} />
            </>
            )}
            {console.log(bestMovies)}
        </>
    )
}

export default BestMovies
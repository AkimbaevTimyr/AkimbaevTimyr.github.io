import React, { useEffect , FC} from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { addBestMovies } from '../../../../store/actions/MovieActionCreator'
import { IMovie } from '../../../../types/MoviesTypes'
import MoviesItem from '../../../MoviesItem'
import Pagination from '../../../pagination.tsx/pagination'
import axios from 'axios'
import Loading from '../../../Loading/loading'
import FilmItem from '../../../FilmItem/FilmItem'
import './style.css'

const BestMovies: FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        const getMovies = async () => {
            let { data } = await axios.get<any>('https://api.themoviedb.org/3/movie/top_rated?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=ru-RU&page=1')
            dispatch(addBestMovies(data.results))
        }
        getMovies()
    }, [])

    const changePage = (page: number) => {
        const getMovies = async () => {
            let { data } = await axios.get<any>(`https://api.themoviedb.org/3/movie/top_rated?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=ru-RU&page=${page}`)
            dispatch(addBestMovies(data.results))
        }
        getMovies()
    }
    const { bestMovies } = useAppSelector(state => state.movies)
    return (
        <div className='container'>
            {bestMovies.length === 0 ? <Loading /> : (<>
                <div className='items'>
                    {bestMovies.map((el: IMovie) => (
                        <FilmItem  id={el.id} img={el.poster_path} title={el.title} vote_average={el.vote_average} release_date={el.release_date} type="фильм"/>
                    ))}
                </div> <Pagination changePage={(page: number) => changePage(page)} />
            </>
            )}
        </div>
    )
}

export default BestMovies




import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { addPersonalSeries } from '../../../../store/actions/MovieActionCreator'
import axios from 'axios'
import PersonalSeriesItem from './PersonalSeriesItem'
import { IMovie } from '../../../../types/MoviesTypes'
import { Link } from 'react-router-dom'

const PersonalSeries: FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        const getMovies = async () => {
            let { data } = await axios.get<any>('https://api.themoviedb.org/3/tv/top_rated?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US&page=4')
            dispatch(addPersonalSeries(data.results))
        }
        getMovies()
    }, [])
    const { personalSeries } = useAppSelector(state => state.movies)
    return (
        <div className='ml-5 '>
            <Link to="personal-series" className='text-3xl ml-4 mb-5 mt-5 cursor-pointer hover:text-slate-600'>
                Рекомендуем сериалы
            </Link>
            <div className='mt-5 flex flex-wrap'>
                {personalSeries.slice(0, 11).map((el: IMovie) => (
                    <Link to={`tv/${el.id}`}><div key={el.id} className='ml-5 mb-3 cursor-pointer w-28 '><img className='rounded-xl' src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} /></div></Link>
                ))}
            </div>
        </div>
    )
}

export default PersonalSeries
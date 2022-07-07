import { Carousel } from '@trendyol-js/react-carousel'
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { addPersonalMovies } from '../../../../store/actions/MovieActionCreator'
import PersonalFilmsItems from './PersonalFilmsItems'
import axios from 'axios'
import { IMovie } from '../../../../types/MoviesTypes'
import { Link } from 'react-router-dom'

const PersonalFilms: FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        const getMovies = async () => {
            let { data } = await axios.get<any>('https://api.themoviedb.org/3/movie/top_rated?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US&page=5')
            dispatch(addPersonalMovies(data.results))
        }
        getMovies()
    }, [])
    const {personalMovies} = useAppSelector(state=> state.movies)
    return (
        <div className='ml-5 mt-5'>
            <Link to='personal-films' className='text-3xl ml-4 mb-5 mt-5 cursor-pointer hover:text-slate-600'>
                Фильмы для вас
            </Link>
            <div className='mt-5 flex flex-wrap'>
                {personalMovies.slice(0,11).map((el: IMovie)=> (
                     <Link to={`movie/${el.id}`}><div key={el.id} className='ml-5 cursor-pointer w-28 mb-3'><img className='rounded-xl' src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} /></div></Link>
                ))}
            </div>
        </div>
    )
}

export default PersonalFilms
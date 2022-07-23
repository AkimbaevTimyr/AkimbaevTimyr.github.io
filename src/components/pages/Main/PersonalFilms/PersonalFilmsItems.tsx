import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../../hooks/redux'
import { IMovie } from '../../../../types/MoviesTypes'




const PersonalFilmsItems: FC = () => {
    const { personalMovies } = useAppSelector(state => state.movies)
    return (
        <div className='flex flex-wrap mt-5'>
            {personalMovies.map((el: IMovie) => (
                <Link to={`/movie/${el.id}`}><div className='ml-5 cursor-pointer w-32 mb-3'><img className='rounded-xl' src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} /></div></Link>
            ))}
        </div>
    )
}

export default PersonalFilmsItems
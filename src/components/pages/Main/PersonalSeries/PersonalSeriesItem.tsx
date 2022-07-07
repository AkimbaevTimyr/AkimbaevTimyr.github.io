import React, { FC } from 'react'
import { useAppSelector } from '../../../../hooks/redux'
import { IMovie } from '../../../../types/MoviesTypes'


const PersonalSeriesItem: FC = () => {
    const { personalSeries } = useAppSelector(state => state.movies)
    return (
        <div className='mt-5 flex flex-wrap'>
            {personalSeries.map((el: IMovie) => (
                <div className='ml-5 cursor-pointer w-32 mb-3'><img alt='series-image' className='rounded-xl' src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} /></div>
            ))}
        </div>
    )
}

export default PersonalSeriesItem
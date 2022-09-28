import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { convertMovieType } from '../../../hooks/convertMovieType/convertMovieType'
import Image from '../Image/Image';
import './filmItem.css'

interface FilmItemProps {
    id: number;
    img: string | null;
    title: string | undefined;
    vote_average: number;
    release_date: string | undefined;
    type: string | null;
}

const FilmItem: FC<FilmItemProps> = ({ id, img, title, vote_average, release_date, type }) => {
    return (
        <div className="film w-52 mb-5 ml-3">
            <div className='relative hover:scale-x-105 hover:scale-y-105 transition-all'>
                <Link to={`/${type}/${id}`}>
                    <Image src={`https://image.tmdb.org/t/p/w220_and_h330_face/${img}`}  
                            className="img object-cover w-48" 
                            width={192}
                            height={288}
                    />
                </Link>
                <span className="absolute ml-3 top-4 rounded-full px-3 py-1.5 bg-green-700 text-white font-medium text-xs">
                {vote_average?.toFixed(1)}
                </span>
            </div>
            <h5 className="title mt-5 text-xl font-bold text-gray-900">{title}</h5>
            <p className="max-w-sm mt-2 text-gray-700">
            {release_date?.substring(0,4) || '—'}, {convertMovieType(type)}
            </p>
        </div >
  )
}

export default FilmItem
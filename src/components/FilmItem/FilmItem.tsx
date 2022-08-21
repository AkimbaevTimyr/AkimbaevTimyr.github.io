import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { convertMovieType } from '../../helpers/convertMovieType/convertMovieType'

interface FilmItemProps {
    id: number;
    img: string | null;
    title: string | undefined;
    vote_average: number;
    release_date: string | undefined;
    type: string | undefined;
}

const FilmItem: FC<FilmItemProps> = ({ id, img, title, vote_average, release_date, type }) => {
    return (
        <div className="w-52 mb-5 ml-3" >
            <div className='relative hover:scale-x-105 hover:scale-y-105 transition-all'>
                <Link to={`/moviesite/${type}/${id}`}>
                <img
                    className="object-cover w-48 "
                    src={img != null ? `https://image.tmdb.org/t/p/w220_and_h330_face/${img}` :'https://st.kp.yandex.net/images/film_big/4781063.jpg' }
                    alt=""
                />
                </Link>
                <span className="absolute ml-3 top-4 rounded-full px-3 py-1.5 bg-green-700 text-white font-medium text-xs">
                {vote_average.toFixed(1)}
            </span>
            </div>
            <h5 className="mt-5  text-xl font-bold text-gray-900">{title}</h5>
            <p className="max-w-sm mt-2 text-gray-700">
            {release_date?.substring(0,4) || '—'}, {convertMovieType(type)}
            </p>
        </div >
  )
}

export default FilmItem
import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { addFavorites, deleteFavoriteMovie } from '../http/favoritesMovie';
import { deleteMovie } from '../store/actions/MovieActionCreator';
import Loading from './Loading/loading';

interface MoviesItemProps {
    id: number;
    poster_path: string | null;
    vote_average: number;
    title: string;
    release_date: string;
    overview: string;
    favorite?: boolean;
}

const MoviesItem: FC<MoviesItemProps> = ({ id, poster_path, vote_average, title, release_date, overview, favorite }) => {

    const dispatch = useAppDispatch()


    const [buttonCondition, setButtonCondition] = useState<boolean | undefined>(favorite)
    const { user } = useAppSelector(state => state.user)
    const handleClick = () => {
        setButtonCondition(!buttonCondition)
    }
    const addFavoriteMovie = async () => {
        dispatch(deleteMovie(1))
        const movie = {
            email: user.email, id, poster_path, vote_average, title, release_date, overview, favorite: true
        }
        await addFavorites(movie)
    }
    const deleteFavorites = async (id: number) => {
        await deleteFavoriteMovie(id)
    }
    return (
        <div className='bg-gray-50 flex justify-center w-1/3 mt-5 hover:bg-gray-100 ml-10 py-2.5 rounded-xl'>
            <div className="relative ">
                {poster_path === null ? (<svg role="status" className=" mt-20 mr-10 inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                </svg>) : (<Link to={`/movie/${id}`}>
                    <img
                        className="w-36 rounded-xl"
                        src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`}
                    />
                </Link>)}
            </div>
            <div className="p-8 sm:col-span-2 ">
                <ul className="flex space-x-1 ">
                    <li
                        className="inline-block px-3 py-1 text-xs font-semibold text-center text-white bg-blue-600 rounded-full"
                    >
                        {vote_average}
                    </li>
                    {release_date === undefined ? "" : (<li
                        className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full"
                    >
                        {release_date}
                    </li>)}
                </ul>
                <h5 className="mt-4 font-bold w-32">{title}.</h5>
            </div>
            <div className='cursor-pointer mt-40' title={buttonCondition === false ? 'Добавить в избранное' : 'Удалить из избранного'} onClick={() => handleClick()}>
                {buttonCondition === false ?
                    (<svg onClick={() => addFavoriteMovie()} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-14 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>) :
                    (<svg onClick={() => deleteFavorites(id)} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-14 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>)}
            </div>
        </div>
    )
}

export default MoviesItem
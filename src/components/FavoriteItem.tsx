import React, {FC} from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux';
import { deleteFavoriteMovie } from '../http/favoritesMovie';
import { deleteMovie } from '../store/actions/MovieActionCreator';
interface FavoriteItemProps {
    id: number ;
    poster_path: string | null;
    vote_average: number;
    title: string;
    release_date: string;
    overview: string;
    favorite?: boolean;
}

const FavoriteItem: FC<FavoriteItemProps> = ({id,  poster_path, vote_average, title, release_date, overview, favorite }) => {
    const dispatch = useAppDispatch()
    const deleteFavorites = async(id: number) =>{
        await deleteFavoriteMovie(id)
        dispatch(deleteMovie(id))
    }
  return (
    <div className='bg-gray-50 flex justify-center w-1/3 mt-5 hover:bg-gray-100 ml-10 py-2.5 rounded-xl'>
            <div className="relative ">
                <Link to={`/movie/${id}`}>
                    <img
                        className="w-36 rounded-xl"
                        src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`}
                    />
                </Link>
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
            <div className='cursor-pointer mt-40' title='Удалить из избранного' onClick={()=>  deleteFavorites(id) } >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-14 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
            </div>
        </div>
  )
}

export default FavoriteItem
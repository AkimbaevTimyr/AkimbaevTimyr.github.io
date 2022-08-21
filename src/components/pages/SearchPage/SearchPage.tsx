import  {  useState } from 'react'
import FilmItem from '../../FilmItem/FilmItem'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { setSearchMovies } from '../../../store/actions/MovieActionCreator'
import styles from './style.module.css'
import {  IFilmItemMovie } from '../../../types/MoviesTypes'

const SearchPage = () => {
    const [text, setText] = useState<string>('')
    const dispatch: any = useAppDispatch()
    const { searchMovies } = useAppSelector(state => state.movies)
    const handleClick = async (e: any) => {
        e.preventDefault()
        dispatch(setSearchMovies(text))
    }
    return (
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 '>
            <div className="w-94 m-auto" >
                <form onSubmit={handleClick} className=" mt-5">
                    <div className="relative">
                        <input onChange={(e) => setText(e.target.value)} type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="" />
                        <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-black rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                    </div>
                </form>
            </div>
            <div className={styles.items}>
                {searchMovies.length != 0 ?  searchMovies.map((el:  IFilmItemMovie) => (
                     <FilmItem  id={el.id} img={el.poster_path} title={el.original_name || el.title} vote_average={el.vote_average} release_date={el.first_air_date || el.release_date} type={el.media_type}/>
                )) : <div>Ничего не найдено</div>}
            </div>
        </div>
    )
}

export default SearchPage

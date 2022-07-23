import React, { useState } from 'react'
import axios from 'axios'
import MoviesItem from '../MoviesItem'

const SearchPage = () => {
    const [text, setText] = useState<string>('')
    const [movies, setMovies] = useState<[]>([])
    const handleClick = async (e: any) => {
        e.preventDefault()
        let { data } = await axios.get<any>(`https://api.themoviedb.org/3/search/multi?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US&query=${text}&page=1&include_adult=false`)
        setMovies(data.results)
        return ''
    }
    return (
        <div className=''>
            <div className="w-96 m-auto " >
                <form onSubmit={handleClick} className=" mt-5">
                    <div className="relative">
                        <input onChange={(e) => setText(e.target.value)} type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="" />
                        <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                    </div>
                </form>
            </div>
            <div className='flex flex-wrap justify-center'>
                {movies && movies.map((el: any) => (
                    <MoviesItem id={el.id} poster_path={el.poster_path} vote_average={el.vote_average} title={el.title} release_date={el.release_date} overview={el.overview} favorite={true} />
                ))}
            </div>
        </div>
    )
}

export default SearchPage

{/* <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style={{position: "absolute", inset: "auto auto 0px 0px",  margin: "0px", transform: "translate3d(377.6px, 626.4px, 0px)"}}>
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                        <li>
                            <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Фильмы</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Сериалы</button>
                        </li>
                    </ul>
                </div> */}
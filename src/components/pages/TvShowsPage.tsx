import React, { useEffect, useState, FC } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const TvShowsPage: FC = () => {
    let { id } = useParams()
    const [tv, setTv] = useState<any>({})
    const { poster_path, title, overview, vote_average, genres } = tv;
    useEffect(() => {
        const getMovies = async () => {
            let { data } = await axios.get<any>(`https://api.themoviedb.org/3/tv/${id}?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US`)
            setTv(data)
            console.log(data)
        }
        getMovies()
    }, [])
    return (
        <div className="flex relative justify-center w-1/2 max-w-screen-xl px-4 py-8 mx-auto">
            <div className="mr-5 mt-9">
                <img
                    style={{"width" : "100%" }}
                    className="object-cover w-36 rounded-xl"
                    src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`}
                />
            </div>
            <div className="sticky top-0">
                <div className="flex justify-between mt-8">
                    <div className="max-w-[35ch]">
                        <h1 className="text-2xl font-bold">
                            {title}
                        </h1>
                        <div className="flex mt-2 -ml-0.5">
                            <p className='ml-1'>{vote_average}</p>
                            <svg
                                className="w-5 h-5 text-yellow-400 mt-0.5"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <div className='flex'>
                            Жанр: {genres === undefined ? "" : (genres.map((el: any) => <p>{el.name},</p> ))}
                        </div>
                    </div>
                </div>
                <details className="relative mt-4 group">
                    <summary className="block">
                        <div>
                            <div className="prose max-w-none group-open:hidden">
                                <p>
                                    {overview}
                                </p>
                            </div>
                        </div>
                    </summary>
                </details>
            </div>
        </div>
    )
}

export default TvShowsPage

import React, { useEffect, useState, FC } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { addFavorites, deleteFavoriteMovie } from '../../../http/favoritesMovie'
import { useAppSelector } from '../../../hooks/redux'
import Loading from '../../Loading/loading'
import './style.css'
import FilmItem from '../../FilmItem/FilmItem'
import Description from '../../Description/Description'
import About from '../../About/About'

const TvShowsPage: FC = () => {
    let { id } = useParams()
    const [movieKey, setMovieKey] = useState<string>('')
    const { user } = useAppSelector(state => state.user)
    const { favoriteMovies, simularMovies } = useAppSelector(state => state.movies)
    const {currentTvShow} = useAppSelector(state => state.tvShows)
    const { budget, tagline, production_countries, runtime,  poster_path, name, overview, vote_average, genres, first_air_date, original_name } = currentTvShow;
    const [buttonCondition, setButtonCondition] = useState<boolean>(false)

    useEffect(() => {
        axios.get<any>(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US`).then((data: any) => setMovieKey(data.data.results[0].key))
        const findItem = favoriteMovies.find((el: any) => el.id == id ? setButtonCondition(true) : '')
    }, [])

    const addFavoriteMovie = async () => {
        setButtonCondition(true)
        await addFavorites(user.email, 'сериал', currentTvShow)
    }
    const deleteFavorites = async (id: any) => {
        setButtonCondition(false)
        await deleteFavoriteMovie(id)
    }
    return (
        <div className='movieContainer'>
            <div className="moviePage" >
                <div className="movie">
                    <div className="itemImg">
                        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`} alt="" className="itemImg" />
                        <p className="rating">8.8</p>
                    </div>
                    <div className="item_about">
                        <h2 className="item_header">{name}</h2>
                        <h2 className="item_subheader">{ original_name}</h2>
                        <div className="item_buttons">
                            <div className="button_watch">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                                    stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                                <a href={`https://www.youtube.com/watch?v=${movieKey}`}>
                                    Смотреть
                                </a>
                            </div>
                            {buttonCondition === true ? (<div onClick={() => deleteFavorites(id)} className="button_watch_later">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                Удалить
                            </div>) : (<div onClick={() => addFavoriteMovie()} className="button_watch_later">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                                    stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Буду смотреть
                            </div>)}
                        </div>
                        <About productionCountries={production_countries} genres={genres} tagline={tagline} budget={budget} runtime={runtime} releaseDate={first_air_date}/>
                    </div>
                </div>
                <Description description={overview}/>
                <br />
                <div className='simular_movies_header'>
                    {simularMovies && 'Похожее кино'}
                </div>
                <div className="simular_movies">
                    {/* <SimularMovies />
                    <SimularMovies />
                    <SimularMovies />
                    <SimularMovies />
                    <SimularMovies /> */}
                    {simularMovies?.slice(0,4).map((el: any) => (
                         <FilmItem key={el.id} id={el.id} img={el.poster_path} title={el.title} vote_average={el.vote_average} release_date={el.release_date} type="фильм" />
                    ))}
                </div>
        </div>
    </div>
    )
}

export default TvShowsPage



{/* <>
            {poster_path === undefined ? (<Loading />) : (<div className="flex relative justify-center w-1/2 max-w-screen-xl px-4 py-8 mx-auto">
                <div className='mr-5'>
                    <img
                        className=" w-36 rounded-xl"
                        src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`}
                    />
                </div>
                <div className=''>
                    <div className='flex justify-between text-2xl font-bold'>
                        <h1>{name}</h1>
                        <div className='cursor-pointer' title={buttonCondition === false ? 'Добавить в избранное' : 'Удалить из избранного'}>
                            {buttonCondition === true ?
                                (<svg xmlns="http://www.w3.org/2000/svg" onClick={() => deleteFavorites(id)} className="h-8 w-8 ml-14 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" onClick={() => addFavoriteMovie()} className="h-8 w-8 ml-14 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>)
                            }
                        </div>
                    </div>
                    <div className="flex mt-2 -ml-0.5">
                        <p className='ml-1'>{vote_average.toFixed(1)}</p>
                        <svg
                            className="w-5 h-5 text-yellow-400 mt-0.5"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                    <div>
                        Даты выхода: {first_air_date}
                    </div>
                    <div className='flex'>
                        Жанр: {genres === undefined ? "" : (genres.map((el: any) => <p>{el.name},</p>))}
                    </div>
                    <div className="w-96">
                        <p>
                            {overview}
                        </p>
                    </div>
                </div>
            </div>)}
        </> */}
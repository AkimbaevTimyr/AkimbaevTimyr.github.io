import React, { useEffect, useState, FC, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import './style.css'
import Description from '../../shared/Description/Description'
import About from '../About/About'
import { addFavoriteMovie, deleteMovieById } from '../../../store/actions/MovieActionCreator'
import { convertTimestampToDate } from '../../../helpers/convertTimestampToDate/convertTimestampToDate'
import SimularMovies from '../../shared/SimularMovies/SimularMovies'
import { useGetTvShowsByIdQuery } from '../../../services/MovieService'
import Loading from '../../shared/Loading/Loading'
import { getUser } from '../../../helpers/getUser/getUser'
import Image from '../../shared/Image/Image'

const TvShowsPage: FC = () => {
    const dispatch: any = useAppDispatch()
    let { id } = useParams()
    const { email } = getUser()
    const { data, isLoading, isError } = useGetTvShowsByIdQuery(Number(id))
    const [movieKey, setMovieKey] = useState<string>('')
    const { favoriteMovies, } = useAppSelector(state => state.movies)
    const { poster_path = undefined, name = undefined, overview = undefined, vote_average = undefined, genres = undefined, first_air_date = undefined, original_name = undefined, original_title = undefined, tagline = undefined, production_countries = undefined, budget = undefined, runtime = undefined } = { ...data };

    const [buttonCondition, setButtonCondition] = useState<boolean>(false)

    useEffect(() => {
        axios.get<any>(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US`).then((data: any) => setMovieKey(data.data.results[0].key))
        const findItem = favoriteMovies.find((el: any) => el.id == id ? setButtonCondition(true) : '')
    }, [])

    const addFavorite = async () => {
        setButtonCondition(true)
        dispatch(addFavoriteMovie([email, 'tv', { ...data }]))
    }
    const deleteFavorite = async (id: string | undefined) => {
        setButtonCondition(false)
        dispatch(deleteMovieById(id))
    }

    const items = [
        { caption: 'Страны', value: production_countries?.map((el: any) => <Fragment>{el.name + ', '}</Fragment>) },
        { caption: "Жанр", value: genres?.map((el: any) => <Fragment>{el.name + ', '}</Fragment>) },
        { caption: 'Слоган', value: tagline || '—' },
        { caption: 'Бюджет', value: '—' },
        { caption: 'Время', value: '—' },
        { caption: 'Премьера в мире', value: convertTimestampToDate(first_air_date) },
    ]

    return (
        <div className='movieContainer'>
            {isLoading === true ? <div className='loading'> <Loading /> </div> : (<div className="moviePage" >
                <div className="movie">
                    <div className="item_img">
                        <Image src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`}
                            className="object-cover w-80" />
                        <span className="absolute ml-3 top-4 rounded-full px-3 py-1.5 bg-green-700 text-white font-medium text-xs">
                            {vote_average?.toFixed(1)}
                        </span>
                    </div>
                    <div className="item_about">
                        <h2 className="item_header">{name}</h2>
                        <h2 className="item_subheader">{original_name}</h2>
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
                            {buttonCondition === true ? (<div onClick={() => deleteFavorite(id)} className="button_watch_later">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                Удалить
                            </div>) : (<div onClick={() => addFavorite()} className="button_watch_later">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                                    stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Буду смотреть
                            </div>)}
                        </div>
                        <About items={items} />
                    </div>
                </div>
                <Description description={overview} />
                <br />
                <div className="simular_movies">
                    <SimularMovies id={id} header='Похожие сериалы' name="tv" />
                </div>
            </div>)}
        </div>
    )
}

export default TvShowsPage



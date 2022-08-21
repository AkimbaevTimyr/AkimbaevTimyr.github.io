import { useEffect, useState, FC, Fragment } from 'react'
import {  useParams } from 'react-router-dom'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import './style.css'
import About from '../../About/About'
import Description from '../../Description/Description'
import { addFavoriteMovie, deleteMovieById } from '../../../store/actions/MovieActionCreator'
import { convertTimestampToDate } from '../../../helpers/convertTimestampToDate/convertTimestampToDate'
import { useGetMoviesByIdQuery } from '../../../services/MovieService'
import Loading from '../../Loading/loading'
import SimularMovies from '../../SimularMovies/SimularMovies'

const MoviePage: FC = () => {
    let { id } = useParams()
    const { data, isLoading, isError } =  useGetMoviesByIdQuery(Number(id))
    const email = localStorage.getItem('email')
    const dispatch: any = useAppDispatch()
    const [movieKey, setMovieKey] = useState<string>('')
    const { favoriteMovies,  } = useAppSelector(state => state.movies)
    const [buttonCondition, setButtonCondition] = useState<boolean>(false)
    const { poster_path = undefined, title = undefined, overview = undefined, vote_average = undefined, genres = undefined, release_date = undefined, original_name = undefined, original_title = undefined, tagline = undefined, production_countries = undefined, budget = undefined, runtime = undefined } = { ...data };

    useEffect(() => {
        axios.get<any>(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US`).then((data: any) => setMovieKey(data.data.results[0].key))
        const findItem = favoriteMovies.find((el: any ) => el.id == id ? setButtonCondition(true) : '')
    }, [])

    const addFavorite = async () => {
        setButtonCondition(true)
        dispatch(addFavoriteMovie([email, 'movie', data]))
    }
    const deleteFavorites = async (id: string | undefined) => {
        setButtonCondition(false)
        dispatch(deleteMovieById(id))
    }

    const items = [
        { caption: 'Страны', value: production_countries?.map((el: any, index: any) => <Fragment>{el.name + ', '}</Fragment>) },
        { caption: "Жанр", value: genres?.map((el: any) => <Fragment>{el.name + ', '}</Fragment>) },
        { caption: 'Слоган', value: tagline || '—' },
        { caption: 'Бюджет', value: `$ ${budget}` || '—' },
        { caption: 'Время', value: `${runtime} мин.` },
        { caption: 'Премьера в мире', value: convertTimestampToDate(release_date) },
    ]

    return (
        <div className='movieContainer'>
            {isLoading === true ?  <div className='loading'><Loading /></div> : (<div className="moviePage" >
                <div className='movie'>
                    <div className="itemImg">
                        {poster_path == undefined ? (<img src='https://st.kp.yandex.net/images/film_big/4781063.jpg' className="itemImg" />) : (
                            <><img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`} alt="" className="itemImg" />
                                <p className="rating">{vote_average?.toFixed(1)}</p></>
                        )}
                    </div>
                    <div className="item_about">
                        <h2 className="item_header">{title}</h2>
                        <h2 className="item_subheader">{original_name || original_title}</h2>
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
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                                    stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Удалить
                            </div>) : (<div onClick={() => addFavorite()} className="button_watch_later">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                Буду смотреть
                            </div>)}
                        </div>
                        <h2 className="about_movie">О фильме</h2>
                        <About items={items} />
                    </div>
                </div>
                <Description description={overview} />
                <br />
                <div className="simular_movies">
                    <SimularMovies id={id} header='Похожие фильмы' name="movie"/>
                </div>
            </div>)}

        </div>
    )
}

export default MoviePage




import React, { FC, Fragment, useState } from 'react'
import { GetMovieKey } from '../../../helpers/getMovieKey/getMovieKey'
import { useAppDispatch } from '../../../hooks/redux'
import Loading from '../Loading/Loading'
import Image from '../Image/Image'
import Button from '../Buttons/ButtonFilmPage/Button'
import About from '../../pages/About/About'
import SimularMovies from '../SimularMovies/SimularMovies'
import { convertTimestampToDate } from '../../../helpers/convertTimestampToDate/convertTimestampToDate'
import { addFavoriteMovie, deleteMovieById } from '../../../store/actions/MovieActionCreator'
import Description from '../Description/Description'
import {getUser} from '../../../helpers/getUser/getUser'
import { GetButtonCondition } from '../../../helpers/getButtonCondition/GetButtonCondition'


interface FilmPageProps {
    data: any;
    isLoading: boolean;
    id: string | undefined;
    vote_average: number | undefined;
    img: string| null;
    original_name: string  | undefined;
    name: string | undefined;
    production_countries: any;
    genres: any;
    tagline: string  | undefined;
    runtime: string  | undefined;
    budget: string | undefined;
    release_date: string | undefined;
    overview: string | undefined;
    type: string | null;
}


const FilmPage: FC<FilmPageProps> = ({id, data, isLoading, name, release_date, vote_average, img, original_name, production_countries, genres, tagline, runtime, budget, overview, type}) => {
    const dispatch: any = useAppDispatch()
    const {email} = getUser();
    const {movieKey} = GetMovieKey(id)
    const {bool, handleClick} = GetButtonCondition(id)
    const items = [
        { caption: 'Страны', value: production_countries?.map((el: any, index: any) => <Fragment>{el.name + ', '}</Fragment>) },
        { caption: "Жанр", value: genres?.map((el: any) => <Fragment>{el.name + ', '}</Fragment>) },
        { caption: 'Слоган', value: tagline || '—' },
        { caption: 'Бюджет', value: `$ ${budget}` || '—' },
        { caption: 'Время', value: `${runtime} мин.` },
        { caption: 'Премьера в мире', value: convertTimestampToDate(release_date) },
    ]
    
    const addFavorite = () => {
        handleClick()
        dispatch(addFavoriteMovie([email, `${type}`, data]))
    }
    const deleteFavorites = (id: string | undefined) => {
        handleClick()
        dispatch(deleteMovieById(id))
    }
  return (
    <div className='movieContainer'>
            {isLoading === true ? <div className='loading'> <Loading /> </div> : (<div className="moviePage" >
                <div className="movie">
                    <div className="item_img">
                        <Image src={`https://image.tmdb.org/t/p/w220_and_h330_face/${img}`}
                            className="object-cover w-80" 
                            width={192}
                            height={288}
                        />
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
                            {bool === true ?  
                                <Button name="Удалить" handleClick={()=> deleteFavorites(id)} />
                                :  <Button name="Буду смотреть" handleClick={()=> addFavorite()}/>
                            }   
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

export default FilmPage;
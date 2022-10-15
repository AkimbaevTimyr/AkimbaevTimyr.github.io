import React, { FC, Fragment, useState, useMemo, memo } from 'react'
import { GetMovieKey } from '../../../hooks/getMovieKey/getMovieKey'
import Loading from '../UI/Loading/Loading'
import Image from '../Image/Image'
import Button from '../UI/Buttons/ButtonFilmPage/Button'
import About from './About/About'
import SimularMovies from './SimularMovies/SimularMovies'
import { convertTimestampToDate } from '../../../hooks/convertTimestampToDate/convertTimestampToDate'
import Description from './Description/Description'
import styles from './style.module.css'
import Reviews from './Reviews/Reviews'
import { IGenres } from '../../../types/MoviesTypes'
import {convertNumbers} from '../../../hooks/convertNumbers/convertNumbers'

interface FilmPageProps {
    data: any;
    isLoading: boolean;
    id?: string;
    vote_average?: number;
    img: string | null;
    original_name?: string;
    name?: string;
    production_countries: any;
    genres?: IGenres[];
    tagline?: string;
    runtime?: string;
    budget?: string;
    release_date?: string;
    overview?: string;
    type: string | null;
}


const FilmPage: FC<FilmPageProps> = memo(({ id, data, isLoading, name, release_date, vote_average, img, original_name, production_countries, genres, tagline, runtime, budget, overview, type }) => {
    const { movieKey } = GetMovieKey(id)
    const items = useMemo(() => [
        { caption: 'Страны', value: production_countries?.map((el: any, index: any) => <Fragment>{el.name + ', '}</Fragment>) },
        { caption: "Жанр", value: genres?.map((el: any) => <Fragment>{el.name + ', '}</Fragment>) },
        { caption: 'Слоган', value: tagline || '—' },
        { caption: 'Бюджет', value: budget === undefined || budget === '0' ? '—' : `$ ${convertNumbers(budget)}` },
        { caption: 'Время', value: runtime !== undefined ? `${runtime + ' мин.'}` : '—' },
        { caption: 'Премьера в мире', value: convertTimestampToDate(release_date) },
    ], [production_countries, genres, tagline, budget, runtime, release_date])
    return (
        <div className={styles.movieContainer}>
            {isLoading === true ? <div className={styles.loading}> <Loading /> </div> : (<div data-testid="film-page" className={styles.moviePage}>
                <div className={styles.movie}>
                    <div className={styles.item_img}>
                        <Image src={`https://image.tmdb.org/t/p/w220_and_h330_face/${img}`}
                            className="object-cover w-80"
                            width={192}
                            height={288}
                        />
                        <span className="absolute ml-3 top-4 rounded-full px-3 py-1.5 bg-green-700 text-white font-medium text-xs">
                            {vote_average?.toFixed(1)}
                        </span>
                    </div>
                    <div className={styles.item_about}>
                        <h2 className={styles.item_header}>{name}</h2>
                        <h2 className={styles.item_subheader}>{original_name}</h2>
                        <div className={styles.item_buttons}>
                            <div className={styles.button_watch}>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                                    strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                                <a href={`https://www.youtube.com/watch?v=${movieKey}`}>
                                    Смотреть
                                </a>
                            </div>
                            <Button id={id} data={data} type={type} />
                        </div>
                        <About items={items} />
                    </div>
                </div>
                <Description description={overview} />
                <br />
                <div className={styles.simular_movies}>
                    <SimularMovies id={id} header={type === 'movie' ? 'Похожие фильмы' : 'Похожие сериалы'} name={type} />
                </div>
                <Reviews id={id} type={type} />
            </div>)}
        </div>
    )
})

export default FilmPage;
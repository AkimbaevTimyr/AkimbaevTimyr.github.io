import React, { FC } from 'react'
import { IMovie } from '../../../../types/MoviesTypes'
import { Link } from 'react-router-dom'
import styles from './style.module.css'
import FilmItem from '../../FilmItem/FilmItem'

interface MainFilmItemsProps {
    data: [];
    type: string;
    sliceEndNumber: number;
}

const MainFilmItems: FC<MainFilmItemsProps> = ({ data, type, sliceEndNumber }) => {
    return (
        <div className={styles.items}>
            {data?.slice(0, sliceEndNumber).map((el: IMovie) => (
                <Link to={`/moviesite/tv/${el.id}`}> <FilmItem key={el.id} id={el.id} img={el.poster_path} title={el.name || el.title} vote_average={el.vote_average} release_date={el.first_air_date || el.release_date} type={`${type}`} />
                </Link>
            ))}
        </div>
    )
}

export default MainFilmItems


import  { FC } from 'react'
import {  useGetSimularQuery } from '../../../services/MovieService'
import { IFilmItemMovie } from '../../../types/MoviesTypes';
import FilmItem from '../FilmItem/FilmItem'
import styles from './style.module.css'

interface SimularMoviesProps {
    id: string | undefined;
    header: string;
    name: string;
}

const SimularMovies: FC<SimularMoviesProps> = ({id, header, name}) => {
    const { data, isLoading, isError } =  useGetSimularQuery({id: Number(id), name})
    return (
        <div className={styles.items}>
            {{...data}.length != 0 ? ( <><div className={styles.header}>
                {header}
            </div>
            <div className={styles.simularMovies}>
                    {data?.results.slice(0, 4).map((el: IFilmItemMovie) => (
                        <FilmItem key={el.id} id={el.id} img={el.poster_path} title={el.title || el.name} vote_average={el.vote_average} release_date={el.release_date || el.first_air_date} type={name}/>
                    ))}
                </div></>) : ''}
        </div>
    )
}

export default SimularMovies
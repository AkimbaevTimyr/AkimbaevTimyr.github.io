import { constants } from 'buffer'
import React, { FC } from 'react'
import { useGetSimularMoviesByIdQuery } from '../../services/MovieService'
import FilmItem from '../FilmItem/FilmItem'
import styles from './style.module.css'

interface SimularMoviesProps {
    id: string | undefined
}

const SimularMovies: FC<SimularMoviesProps> = ({id}) => {
    const { data, isLoading, isError } = useGetSimularMoviesByIdQuery(Number(id))
    console.log(data)
    return (
        <div className={styles.simularMovies}>
            {data?.results.slice(0, 4).map((el: any) => (
                <FilmItem key={el.id} id={el.id} img={el.poster_path} title={el.title} vote_average={el.vote_average} release_date={el.release_date} type="фильм" />
            ))}

        </div>
    )
}

export default SimularMovies
import { FC, } from 'react'
import {  useParams } from 'react-router-dom'
import { useGetMoviesByIdQuery } from '../../../services/MovieService'
import FilmPage from '../../shared/FilmPage/FilmPage'

const Movie: FC = () => {
    let { id } = useParams()
    const { data, isLoading, isError } =  useGetMoviesByIdQuery(Number(id))
    const { poster_path = "", title = "", overview = "", vote_average = undefined, genres = undefined, release_date = "",  original_title = "", tagline = "", production_countries = undefined, budget = "", runtime = "" } = { ...data };
   
    return (
        <>
            <FilmPage id={id} data={data} type="movie" isLoading={isLoading} img={poster_path} name={title} vote_average={vote_average} original_name={original_title} production_countries={production_countries} genres={genres} tagline={tagline}  runtime={runtime} budget={budget} release_date={release_date} overview={overview}/>
        </>
    )
}

export default Movie




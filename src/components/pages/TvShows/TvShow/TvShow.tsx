import React, {  FC, } from 'react'
import { useParams } from 'react-router-dom'
import { useGetTvShowsByIdQuery } from '../../../../services/MovieService'
import FilmPage from '../../../shared/FilmPage/FilmPage'

const TvShow: FC = () => {
    let { id } = useParams()
    const { data, isLoading, isError } = useGetTvShowsByIdQuery(Number(id))
    const { poster_path  = "", name = "", overview = undefined, vote_average = undefined, genres = undefined, first_air_date = undefined, original_name = undefined, original_title = undefined, tagline = undefined, production_countries = undefined, budget = undefined, runtime = undefined } = { ...data };

    return (
        <>
            <FilmPage id={id} data={data} type="tv" isLoading={isLoading} img={poster_path} name={name} vote_average={vote_average} original_name={original_name} production_countries={production_countries} genres={genres} tagline={tagline}  runtime={runtime} budget={budget} release_date={first_air_date} overview={overview} />
        </>
    )
}

export default TvShow



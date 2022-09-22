import React, { FC } from 'react'
import { IMovie } from '../../../../types/MoviesTypes'
import FilmItem from '../../../shared/FilmItem/FilmItem'

interface SearchResultProps {
    data: []
}

const SearchResult: FC<SearchResultProps> = ({ data }) => {
    return (
        <div>
            {data.length != 0 ? data.map((el: IMovie) => (
                <FilmItem id={el.id} img={el.poster_path} title={el.original_name || el.title} vote_average={el.vote_average} release_date={el.first_air_date || el.release_date} type={el.media_type} />
            )) : <div>Ничего не найдено</div>}
        </div>
    )
}

export default SearchResult
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IMovie } from '../types/MoviesTypes';

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3' }),
    endpoints: (builder) =>({
        getMoviesById: builder.query<IMovie, any>({
            query: (id: number) => `/movie/${id}?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=ru-RU`,
        }),
        getSimularMoviesById: builder.query<any, any>({
            query: (id: number) => `/movie/${id}/similar?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US&page=1`
        })
    }),
})

export const {useGetMoviesByIdQuery, useGetSimularMoviesByIdQuery } = movieApi;


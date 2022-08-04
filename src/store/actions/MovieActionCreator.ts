import { async } from '@firebase/util'
import {createAsyncThunk} from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { IFavoriteMovie, IMovie } from '../../types/MoviesTypes'
import axios from 'axios'

// export const getAllMovies = createAsyncThunk(
//     "movies/getAllMovies",
//     async(_, thunkAPI) =>{
//         try{
//            return getBestMovies(1)
//             getPopularMovies(1)
//            getPersonalSeries()
//             getPersonalMovies()
//             getPersonalSeries()
        
//         }catch(e){

//         }
//     }
// )


export const getBestMovies = createAsyncThunk(
    "movies/getBestMovies",
    async (page: number, thunkAPI) =>{
        try{
            let { data } = await axios.get<any>(`https://api.themoviedb.org/3/movie/top_rated?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=ru-RU&page=${page}`)
            return data.results
        }catch(e){

        }
    }
)

export const getPopularMovies = createAsyncThunk(
    "movies/getPopularMovies",
    async (page: number, thunkAPI) => {
        try{
            let { data } = await axios.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US&page=${page}`)
            return data.results
        }catch(e){

        }
    }
)

export const getPersonalMovies = createAsyncThunk(
    "movies/getPersonalMovies",
    async(_, thunkAPI) =>{
        try{
            let { data } = await axios.get<any>('https://api.themoviedb.org/3/movie/top_rated?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US&page=5');
            return data.results
        }catch(e){

        }
    }
)

export const getPersonalSeries = createAsyncThunk(
    "movies/getPersonalSeries",
    async(_, thunkAPI) => {
        try{
            let { data } = await axios.get<any>('https://api.themoviedb.org/3/tv/top_rated?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=ru-RU&page=4');
            return data.results
        }catch(e){

        }
    }
)

export const getUpcomingPremiers = createAsyncThunk(
    "movies/getUpcomingPremiers",
    async(_, thunkAPI) =>{
        try{
            let { data } = await axios.get<any>('https://api.themoviedb.org/3/movie/upcoming?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US&page=1');
            return data.results
        }catch(e){

        }
    }
)

export const addFavoriteMovies = createAsyncThunk(
    "movie/addFavoriteMovie",
    async(movies: IFavoriteMovie[], thunkAPI) =>{
        try{
            return movies
        }catch(e){

        }
    }
)

export const deleteMovie = createAsyncThunk(
    "movie/deleteFavoriteMovie",
    async(id: number, thunkAPI) =>{
        try{
            return id
        }catch(e){

        }
    }
)

export const getMoviesById = createAsyncThunk(
    "movie/getMoviesById",
    async(id: number, thunkAPI) => {
        try{
            let { data } = await axios.get<any>(`https://api.themoviedb.org/3/movie/${id}?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=ru-RU`)
            return data
        }catch(e){

        }
    }
)

// .then((data: any) => setMovieKey(data.data.results[0].key))
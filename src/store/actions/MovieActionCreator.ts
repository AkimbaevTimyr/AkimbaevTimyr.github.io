import { async } from '@firebase/util'
import {createAsyncThunk} from '@reduxjs/toolkit'
import { useAppSelector } from '../../hooks/redux'
import { IFavoriteMovie, IMovie } from '../../types/MoviesTypes'


export const addBestMovies = createAsyncThunk(
    "movies/addBestMovies",
    async (movies: IMovie[], thunkAPI) =>{
        try{
            return movies
        }catch(e){

        }
    }
)

export const addPopularMovies = createAsyncThunk(
    "movies/addPopularMovies",
    async (movies: IMovie[], thunkAPI) => {
        try{
            return movies
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

export const addPersonalMovies = createAsyncThunk(
    'movie/addPersonalMovie',
    async(movies: IMovie[], thunkAPI) =>{
        try{
            return movies
        }catch(e){

        }
    }
)

export const addPersonalSeries = createAsyncThunk(
    'movie/addPersonalSeries',
    async(series: IMovie[], thunkAPI) =>{
        try{
            return series
        }catch(e){

        }
    }
)

export const addUpcomingPremiers = createAsyncThunk(
    "movie/addUpcomingPremiers",
    async(movies: IMovie[], thunkAPI) =>{
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
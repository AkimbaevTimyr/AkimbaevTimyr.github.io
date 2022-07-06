import {createAsyncThunk} from '@reduxjs/toolkit'
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
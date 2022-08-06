import { async } from '@firebase/util'
import {createAsyncThunk} from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { IFavoriteMovie, IMovie } from '../../types/MoviesTypes'
import axios from 'axios'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase-config'

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

export const getAllMovies = createAsyncThunk(
    "movies/getAllMovies",
    async(page: number, thunkAPi) => {
        try{
            let {data} = await axios.get<any>(`https://api.themoviedb.org/3/discover/movie?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=ru-RU&sort_by=vote_average.desc&vote_average.gte=1&vote_average.lte=10&page=${page}`)
            return data.results
        }catch(e){
            console.log(e)
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

export const getSimularMoviesById = createAsyncThunk(
    "movies/getSimularMovies",
    async(id: number, thunkAPI) =>{
        try{
            let {data} = await axios.get<any>(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US&page=1`)
            return data.results
        }catch(e){
            
        }
    }
)

export const getFavoriteMovies = createAsyncThunk(
    "movies/getFavoriteMovies",
    async(email: string, thunkAPI) => {
        try{
            const querySnapshot = await getDocs(collection(db, "favorites"));
            const data = querySnapshot.docs.map(doc => doc.data())
            return data.filter(el => el.email === email)
        }catch(e){

        }
    }
)

export const setSearchMovies = createAsyncThunk(
    "movies/searchMovies",
    async(text: string, thunkAPI) => {
        try{
            let { data } = await axios.get<any>(`https://api.themoviedb.org/3/search/multi?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US&query=${text}&page=1&include_adult=false`)
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

export const sortingMoviesByRating = createAsyncThunk(
    "movie/deleteFavoriteMovies",
    async(data: any) => {
        let  [first = 10, second = 1,firstYear = 1960, secondYear = 2025, page = 1 ] = data;
        try{
            let {data} = await axios.get<any>(`https://api.themoviedb.org/3/discover/movie?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=ru-RU&sort_by=vote_average.asc&page=${page}&release_date.gte=${firstYear}&release_date.lte=${secondYear}&vote_average.gte=${first}&vote_average.lte=${second}&with_watch_monetization_types=flatrate`)
            console.log(data)
            return data.results
        }catch(e){

        }
    }
)



// .then((data: any) => setMovieKey(data.data.results[0].key))
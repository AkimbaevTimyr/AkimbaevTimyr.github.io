import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'



export const getTvShows = createAsyncThunk(
    "tvshows/getTvShows",
    async(page: number, thunkAPI) =>{
        try{
            let { data } = await axios.get<any>(`https://api.themoviedb.org/3/tv/popular?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=ru-RU&page=${page}`)
            return data.results
        }catch(e){

        }
    }
)

export const getTvShowsById = createAsyncThunk(
    "tvshows/getTvShowsById",
    async(id: number, thunkAPI) => {
        try{
            let { data } = await axios.get<any>(`https://api.themoviedb.org/3/tv/${id}?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=ru-RU`)
            return data
        }catch(e){

        }
    }
)
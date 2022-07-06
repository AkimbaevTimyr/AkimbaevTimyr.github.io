import {createAsyncThunk} from '@reduxjs/toolkit'
import { ITvShows } from '../../types/TvShowTypes'




export const addTvShows = createAsyncThunk(
    "tvshows/addTvShows",
    async(tvShows: ITvShows[], thunkAPI) =>{
        try{
            return tvShows
        }catch(e){

        }
    }
)
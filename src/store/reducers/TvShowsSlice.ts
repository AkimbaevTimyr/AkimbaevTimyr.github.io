import { createSlice } from "@reduxjs/toolkit";
import { ITvShowsState } from "../../types/TvShowTypes";
import { addTvShows } from "../actions/TvShowActionCreator";


const initialState: ITvShowsState = {
    popularTvShows: [],
}

const tvShowsSlice = createSlice({
    name: "tvshows",
    initialState,
    reducers: {},
    extraReducers: {
        [addTvShows.fulfilled.type] : (state, action) =>{
            state.popularTvShows = action.payload;
            console.log(state.popularTvShows)
        }
    }
})

export default tvShowsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { ITvShowsState } from "../../types/TvShowTypes";
import { getTvShows, getTvShowsById } from "../actions/TvShowActionCreator";


const initialState: ITvShowsState = {
    popularTvShows: [],
    currentTvShow: {
        id: 1,
        name: "",
        original_name: "",
        backdrop_path: "",
        release_date: "",
        overview: "",
        vote_average: 1,
        poster_path: "",
        first_air_date: "",
    },
}

const tvShowsSlice = createSlice({
    name: "tvshows",
    initialState,
    reducers: {},
    extraReducers: {
        [getTvShows.fulfilled.type]: (state, action) => {
            state.popularTvShows = action.payload;
        },
        [getTvShowsById.fulfilled.type]: (state, action) => {
            state.currentTvShow = action.payload
        }
    }
})

export default tvShowsSlice.reducer;
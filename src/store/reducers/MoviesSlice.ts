import { createSlice } from "@reduxjs/toolkit";
import { addBestMovies, addFavoriteMovies, addPersonalMovies, addPersonalSeries, addPopularMovies, addUpcomingPremiers,  deleteMovie } from "../actions/MovieActionCreator";
import { IMovieState } from "../../types/MoviesTypes";

const initialState: IMovieState = {
    bestMovies: [],
    popularMovies: [],
    favoriteMovies: [],
    personalMovies: [],
    personalSeries: [],
    upcomingPremiers: [],
}

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers:{
        [addBestMovies.fulfilled.type]: (state, action) =>{
            state.bestMovies = action.payload;
        },
        [addPopularMovies.fulfilled.type]: (state, action) =>{
            state.popularMovies = action.payload;
        },
        [addFavoriteMovies.fulfilled.type]: (state, action) =>{
            state.favoriteMovies = action.payload;
        },
        [addPersonalMovies.fulfilled.type]: (state, action) =>{
            state.personalMovies = action.payload;
        },
        [addPersonalSeries.fulfilled.type]: (state, action) =>{
            state.personalSeries = action.payload;
        },
        [addUpcomingPremiers.fulfilled.type]: (state, action) =>{
            state.upcomingPremiers = action.payload;
        },
        [deleteMovie.fulfilled.type]: (state, action) => {
            state.favoriteMovies = state.favoriteMovies.filter(el => el.id !== action.payload)
        }
    }
})

export default moviesSlice.reducer;
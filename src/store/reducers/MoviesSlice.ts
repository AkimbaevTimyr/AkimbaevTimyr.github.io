import { createSlice } from "@reduxjs/toolkit";
import { getBestMovies, getPersonalSeries, getUpcomingPremiers, getPopularMovies, getPersonalMovies, getFavoriteMovies, deleteMovie, getMoviesById, getSimularMoviesById, setSearchMovies, getAllMovies, sortingMoviesByRating, } from "../actions/MovieActionCreator";
import { IMovieState } from "../../types/MoviesTypes";


const initialState: IMovieState = {
    bestMovies: [],
    popularMovies: [],
    favoriteMovies: [],
    personalMovies: [],
    personalSeries: [],
    upcomingPremiers: [],
    currentMovie: {
        id: 1,
        title: "",
        backdrop_path: "",
        release_date: "",
        overview: "",
        vote_average: 1,
        poster_path: "",
    },
    simularMovies: [],
    searchMovies: [],
    allMovies: [],
}

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: {
        [getBestMovies.fulfilled.type]: (state, action) => {
            state.bestMovies = action.payload;
        },
        [getPopularMovies.fulfilled.type]: (state, action) => {
            state.popularMovies = action.payload;
        },
        [getPersonalMovies.fulfilled.type]: (state, action) => {
            state.personalMovies = action.payload;
        },
        [getPersonalSeries.fulfilled.type]: (state, action) => {
            state.personalSeries = action.payload;
        },
        [getUpcomingPremiers.fulfilled.type]: (state, action) => {
            state.upcomingPremiers = action.payload;
        },
        [deleteMovie.fulfilled.type]: (state, action) => {
            state.favoriteMovies = state.favoriteMovies.filter(el => el.id !== action.payload)
        },
        [getFavoriteMovies.fulfilled.type]: (state, action) => {
            state.favoriteMovies = action.payload;
        },
        // [getAllMovies.fulfilled.type] : (state, action) =>{
        //     console.log(action.payload)
        // } 
        [getMoviesById.fulfilled.type] : (state, action) =>{
            state.currentMovie = action.payload
        },
        [getSimularMoviesById.fulfilled.type] : (state, action) =>{
            state.simularMovies = action.payload
        },
        [setSearchMovies.fulfilled.type]: (state, action) =>{
            state.searchMovies = action.payload
        },
        [getAllMovies.fulfilled.type] : (state, action) => {
            state.allMovies = action.payload;
        },
        [sortingMoviesByRating.fulfilled.type] : (state, action) => {
            state.allMovies = action.payload
        }
    }
})

export default moviesSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { addBestMovies, addFavoriteMovies, addPopularMovies } from "../actions/MovieActionCreator";
import { IMovieState } from "../../types/MoviesTypes";

const initialState: IMovieState = {
    bestMovies: [],
    popularMovies: [],
    favoriteMovies: [],
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
            state.favoriteMovies = action.payload
        }
    }
})

export default moviesSlice.reducer;
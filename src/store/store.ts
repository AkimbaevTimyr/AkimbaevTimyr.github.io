import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moviesReducer from './reducers/MoviesSlice'
import tvShowsReducer from './reducers/TvShowsSlice'
import userReducer from './reducers/UserSlice'

export const rootReducer = combineReducers<any>({
    movies: moviesReducer,
    tvShows: tvShowsReducer,
    user: userReducer,
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}



export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']
import { combineReducers, configureStore, } from "@reduxjs/toolkit";
import moviesReducer from './reducers/MoviesSlice'
import tvShowsReducer from './reducers/TvShowsSlice'
import userReducer from './reducers/UserSlice'
import { movieApi } from "../Service/Service";

export const rootReducer = combineReducers<any>({
    movies: moviesReducer,
    tvShows: tvShowsReducer,
    user: userReducer,
    // [movieApi.reducerPath]: movieApi.reducer,
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        // middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(movieApi.middleware),
})}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>; 
export type AppDispatch = AppStore['dispatch']
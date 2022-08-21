import { ITvShows } from "./TvShowTypes";

export interface IMovieState{
    bestMovies: IMovie[];
    popularMovies: IMovie[];
    favoriteMovies: IFavoriteMovie[];
    personalMovies: IMovie[];
    personalSeries: IMovie[];
    upcomingPremiers: IMovie[];
    currentMovie: {};
    simularMovies: IMovie[];
    searchMovies: IMovie[];
    allMovies: IMovie[];
    isLoading: boolean;
    simularTvShows: ITvShows[];
}
export type IMovie = {
    id: number;
    title: string;
    backdrop_path: string;
    release_date: string;
    overview: string;
    vote_average: number;
    poster_path: string | null;
    genres: IGenres[];
    tagline: string;
    production_countries: IProductionCountries[];
    original_name: string;
}

export type IFilmItemMovie = {
    email: string;
    id: number;
    original_name?: string;
    title?: string;
    first_air_date?: string | undefined;
    release_date?: string | undefined;
    vote_average: number;
    poster_path: string | null;
    type: string;
    media_type?: string | undefined;
    name? : string | undefined;
}
export interface IFavoriteMovie extends IFilmItemMovie{

}

export type IGenres = {
    id: number;
    name: string;
}

export type IProductionCountries = {
    iso_3166_1: string;
    name: string;
}



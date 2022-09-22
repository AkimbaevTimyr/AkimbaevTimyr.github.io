import { ITvShows } from "./TvShowTypes";

export interface IMovieState{
    bestMovies: IMovie[];
    popularMovies: IMovie[];
    favoriteMovies: IMovie[];
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
    backdrop_path: string;
    overview: string;
    vote_average: number;
    poster_path: string | null;
    genres: IGenres[];
    tagline: string;
    production_countries: IProductionCountries[];
    original_name?: string;
    first_air_date?: string | undefined;
    media_type?: string | undefined;
    type?: string;
    title?: string;
    release_date?: string | undefined;
    name?: string;
}

export type IGenres = {
    id: number;
    name: string;
}

export type IProductionCountries = {
    iso_3166_1: string;
    name: string;
}



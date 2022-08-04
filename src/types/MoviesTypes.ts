export interface IMovieState{
    bestMovies: IMovie[];
    popularMovies: IMovie[];
    favoriteMovies: IFavoriteMovie[];
    personalMovies: IMovie[];
    personalSeries: IMovie[];
    upcomingPremiers: IMovie[];
    currentMovie: IMovie;
}
export type IMovie = {
    id: number;
    title: string;
    backdrop_path: string;
    release_date: string;
    overview: string;
    vote_average: number;
    poster_path: string | null;
}

export type IFavoriteMovie = {
    email: string;
    id: number;
    original_name: string;
    first_air_date: string;
    overview: string;
    vote_average: number;
    poster_path: string | null;
    favorite: boolean;
}


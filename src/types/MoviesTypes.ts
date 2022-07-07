export interface IMovieState{
    bestMovies: IMovie[];
    popularMovies: IMovie[];
    favoriteMovies: IFavoriteMovie[];
    personalMovies: IMovie[];
    personalSeries: IMovie[];
    upcomingPremiers: IMovie[];
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
    title: string;
    release_date: string;
    overview: string;
    vote_average: number;
    poster_path: string | null;
    favorite: boolean;
}


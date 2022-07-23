export interface ITvShowsState {
    popularTvShows: ITvShows[];
}
export type ITvShows = {
    id: number ;
    original_name: string;
    backdrop_path: string;
    release_date: string;
    overview: string;
    vote_average: number;
    poster_path: string | null;
    first_air_date: string;
}
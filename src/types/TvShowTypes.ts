export interface ITvShowsState {
    popularTvShows: ITvShows[];
    currentTvShow: ITvShows;
}
export type ITvShows = {
    id: number ;
    name: string;
    original_name?: string;
    backdrop_path: string;
    release_date: string;
    overview: string;
    vote_average: number;
    poster_path: string | null;
    first_air_date: string;
}
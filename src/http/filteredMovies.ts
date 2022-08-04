import axios from 'axios'

export const getFilteredBestMovies = async (rating1: number, rating2: number, year1: number, year2: number, page: number): Promise<any> =>{
    let res = await axios.get<any>(`https://api.themoviedb.org/3/movie/top_rated?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=ru-RU&page=${page}`)
    // const data = res.results.filter((el: any) => rating1 <= el.vote_average && el.vote_average <= rating2 && year1 <= el.release_date && el.release_date <= year2 )
    return res
}
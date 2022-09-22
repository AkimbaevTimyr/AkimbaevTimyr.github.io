import React,{useState, useEffect} from 'react'
import axios from 'axios'

export const GetMovieKey = (id: string | undefined) =>{
    const [movieKey, setMovieKey] = useState<string>('')
    useEffect(()=> {
        const get = async() =>{
            await axios.get<any>(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US`).then((data: any) => setMovieKey(data.data.results[0].key))
        }
        get()
    },[])
    return {movieKey}
}
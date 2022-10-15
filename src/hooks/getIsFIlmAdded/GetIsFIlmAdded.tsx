import React, {useState, useEffect} from 'react'
import { useAppSelector } from '../redux'

export const GetIsFIlmAdded = (id: string | undefined) =>{
    const [isFilmAdded, setIsFilmAdded] = useState<boolean>(false)
    const { favoriteMovies  } = useAppSelector(state => state.movies)
    const handleClick = () =>{
        setIsFilmAdded(!isFilmAdded)
    }
    useEffect(()=> {
        const findItem = favoriteMovies.find((el: any ) => el.id == id ? setIsFilmAdded(true) : '')
    },[id])
    return {
        isFilmAdded,
        handleClick
    }
}
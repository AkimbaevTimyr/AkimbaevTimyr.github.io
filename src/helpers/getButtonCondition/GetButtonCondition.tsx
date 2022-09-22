import React, {useState, useEffect} from 'react'
import { useAppSelector } from '../../hooks/redux'

export const GetButtonCondition = (id: string | undefined) =>{
    const [bool, setBool] = useState<boolean>(false)
    const { favoriteMovies  } = useAppSelector(state => state.movies)
    const handleClick = () =>{
        setBool(!bool)
    }
    useEffect(()=> {
        const findItem = favoriteMovies.find((el: any ) => el.id == id ? setBool(true) : '')
    },[id])
    return {
        bool,
        handleClick
    }
}
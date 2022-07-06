import React, { useEffect } from 'react'
import axios from 'axios'


const Main = () => {
    useEffect(() => {
      const getMovies = async () => {
          let { data } = await axios.get<any>('https://api.themoviedb.org/3/search/person?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US&query=Tom&page=1&include_adult=false')
        }
      getMovies()
  }, [])
  return (
   <div>
    Главная
   </div>
  )
}



export default Main
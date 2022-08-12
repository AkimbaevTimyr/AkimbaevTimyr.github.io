import React, { useEffect, FC } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import Loading from '../../Loading/loading'
import PersonalFilms from './PersonalFilms/PersonalFilms'
import PersonalSeries from './PersonalSeries/PersonalSeries'
import UpcomingPremiers from './UpcomingPremires/UpcomingPremiers'


const Main: FC = () => {
  const {isLoading} = useAppSelector(state => state.movies)
  if(isLoading){
    return <Loading />
  }
  return (
   <div>
    <PersonalFilms />
    <PersonalSeries />
    <UpcomingPremiers />
   </div>
  )
}



export default Main
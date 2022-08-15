import React, { useEffect, FC } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import Loading from '../../Loading/loading'
import PersonalFilms from './PersonalFilms/PersonalFilms'
import PersonalSeries from './PersonalSeries/PersonalSeries'
import UpcomingPremiers from './UpcomingPremires/UpcomingPremiers'
import styles from './style.module.css'
import { Link } from 'react-router-dom'
import Navigation from '../../Navigation/Navigation'

const Main: FC = () => {
  const {isLoading} = useAppSelector(state => state.movies)
  if(isLoading){
    return <Loading />
  }
  
  return (
   <div className={styles.main}>
    <PersonalFilms />
    <PersonalSeries />
    <UpcomingPremiers />
   </div>
  )
}



export default Main
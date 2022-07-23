import React, { useEffect, FC } from 'react'
import PersonalFilms from './PersonalFilms/PersonalFilms'
import PersonalSeries from './PersonalSeries/PersonalSeries'
import UpcomingPremiers from './UpcomingPremires/UpcomingPremiers'


const Main: FC = () => {
  return (
   <div>
    <PersonalFilms />
    <PersonalSeries />
    <UpcomingPremiers />
   </div>
  )
}



export default Main
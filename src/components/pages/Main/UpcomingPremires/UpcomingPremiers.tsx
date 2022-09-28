import React from 'react'
import {  useAppSelector } from '../../../../hooks/redux'
import MainFilmItems from '../../../shared/MainItems/MainFilmItems/MainFilmItems'
import MainSubHeader from '../../../shared/MainItems/MainSubHeader/MainSubHeader'
import styles from '../style.module.css'

const UpcomingPremiers = () => {
  const { upcomingPremiers } = useAppSelector(state => state.movies)
  return (
    <div className={styles.films}>
      <MainSubHeader  name="Премьеры для вас" path='upcoming-premiers'/>
      <MainFilmItems sliceEndNumber={6} data={upcomingPremiers} type="movie"/>
      <br/>
    </div>
  )
}

export default UpcomingPremiers
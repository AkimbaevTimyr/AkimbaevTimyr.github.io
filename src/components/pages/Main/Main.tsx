import React, { useEffect, FC } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import Loading from '../../Loading/loading'
import PersonalFilms from './PersonalFilms/PersonalFilms'
import PersonalSeries from './PersonalSeries/PersonalSeries'
import UpcomingPremiers from './UpcomingPremires/UpcomingPremiers'
import styles from './style.module.css'
import { Link } from 'react-router-dom'

const Main: FC = () => {
  const {isLoading} = useAppSelector(state => state.movies)
  if(isLoading){
    return <Loading />
  }
  const navigation = [
    { name: 'Главная', href: '/', },
    { name: 'Избранное', href: '/watchlist', },
    { name: 'Фильмы', href: '/films', },
    { name: 'Сериалы', href: '/tvshows', },
]
  return (
   <div className={styles.main}>
    <PersonalFilms />
    <PersonalSeries />
    <UpcomingPremiers />
    <div className={styles.nav}>
                    {navigation.map((el: any) => (
                        <Link to={el.href}><div className={styles.navItem}>{el.name}</div></Link>
                    ))}
                </div>
   </div>
  )
}



export default Main
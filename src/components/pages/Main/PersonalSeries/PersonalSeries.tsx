import  { FC, } from 'react'
import {  useAppSelector } from '../../../../hooks/redux'
import styles from '../style.module.css'
import MainSubHeader from '../../../shared/MainItems/MainSubHeader/MainSubHeader'
import MainFilmItems from '../../../shared/MainItems/MainFilmItems/MainFilmItems'

const PersonalSeries: FC = () => {
    const { personalSeries } = useAppSelector(state => state.movies)
    return (
        <div className={styles.films}>
            <MainSubHeader  name="Сериалы для вас" path='personal-series'/>
            <MainFilmItems sliceEndNumber={6} data={personalSeries} type="tv"/>
        </div>
    )
}

export default PersonalSeries
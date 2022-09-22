import  { FC,} from 'react'
import {  useAppSelector } from '../../../../hooks/redux'
import styles from '../style.module.css'
import MainSubHeader from '../../../shared/MainItems/MainSubHeader/MainSubHeader'
import MainFilmItems from '../../../shared/MainItems/MainFilmItems/MainFilmItems'

const PersonalFilms: FC = () => {
    const { personalMovies } = useAppSelector(state => state.movies)
    return (
        <div className={styles.films}>
            <br />
            <MainSubHeader name="Фильмы для вас" path='personal-films'/>
            <MainFilmItems sliceEndNumber={6} data={personalMovies} type="movie"/>
        </div>
    )
}

export default PersonalFilms
import  { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../../hooks/redux'
import { ITvShows } from '../../../../types/TvShowTypes'
import FilmItem from '../../../shared/FilmItem/FilmItem'
import Loading from '../../../shared/UI/Loading/Loading'
import MainFilmItems from '../../../shared/MainItems/MainFilmItems/MainFilmItems'
import styles from '../style.module.css'
import Button from '../../../shared/UI/Buttons/ButtonMainPage/Button'

const PersonalSeriesItem: FC = () => {
    const { personalSeries } = useAppSelector(state => state.movies)
    return (
        <div className={styles.films}>
           <Button />
            <div className={styles.container}>
                {personalSeries.length === 0 ? <Loading /> : (
                    <MainFilmItems data={personalSeries} sliceEndNumber={personalSeries?.length} type="tv"/>
                )}
            </div>
        </div>
    )
}

export default PersonalSeriesItem
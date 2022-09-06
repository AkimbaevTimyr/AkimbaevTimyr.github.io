import  { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../../hooks/redux'
import { ITvShows } from '../../../../types/TvShowTypes'
import FilmItem from '../../../shared/FilmItem/FilmItem'
import Loading from '../../../shared/Loading/Loading'
import styles from '../style.module.css'

const PersonalSeriesItem: FC = () => {
    const { personalSeries } = useAppSelector(state => state.movies)
    return (
        <div className={styles.films}>
            <div className={styles.back}>
                <Link to="/">
                    Назад
                </Link>
            </div>
            <div className={styles.container}>
                {personalSeries.length === 0 ? <Loading /> : (<>
                    <div className={styles.items}>
                        {personalSeries.map((el: ITvShows) => (
                            <FilmItem key={el.id} id={el.id} img={el.poster_path} title={el.name} vote_average={el.vote_average} release_date={el.first_air_date} type="tv" />
                        ))}
                    </div>
                </>)}
            </div>
        </div>
    )
}

export default PersonalSeriesItem
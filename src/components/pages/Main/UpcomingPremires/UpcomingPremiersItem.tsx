import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../../hooks/redux'
import { IMovie } from '../../../../types/MoviesTypes'
import Loading from '../../../shared/UI/Loading/Loading'
import FilmItem from '../../../shared/FilmItem/FilmItem'
import styles from '../style.module.css'
import MainFilmItems from '../../../shared/MainItems/MainFilmItems/MainFilmItems'
import Button from '../../../shared/UI/Buttons/ButtonMainPage/Button'

function UpcomingPremiersItem() {
  const { upcomingPremiers } = useAppSelector(state => state.movies)
  return (
    <div className={styles.films}>
      <Button />
      <div className={styles.container}>
        {upcomingPremiers.length === 0 ? <Loading /> : (
          <MainFilmItems data={upcomingPremiers} sliceEndNumber={upcomingPremiers?.length} type="movie" />
        )}
      </div>
    </div>
  )
}

export default UpcomingPremiersItem
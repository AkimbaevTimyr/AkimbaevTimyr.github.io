import { getTvShows } from '../../../store/actions/TvShowActionCreator'
import { useAppSelector } from '../../../hooks/redux'
import Loading from '../../Loading/loading'
import { ITvShows } from '../../../types/TvShowTypes'
import Pagination from '../../pagination.tsx/pagination'
import styles from './style.module.css'
import FilmItem from '../../FilmItem/FilmItem'

const TvShows = () => {
  const changePage = async (page: number) => {
    getTvShows(page)
  }
  const { popularTvShows } = useAppSelector(state => state.tvShows)
  return (
    <>
      {popularTvShows.length === 0 ? <Loading /> : (<>
        <div className={styles.items}>
          {popularTvShows.map((el: ITvShows) => (
            <FilmItem key={el.id} id={el.id} img={el.poster_path}  title={el.original_name} vote_average={el.vote_average} release_date={el.first_air_date} type="tv" />
          ))}
        </div> <Pagination changePage={(page: number) => changePage(page)} />
      </>
      )}
    </>
  )
}

export default TvShows


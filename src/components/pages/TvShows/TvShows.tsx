import { getTvShows } from '../../../store/actions/TvShowActionCreator'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import Loading from '../../shared/Loading/Loading'
import { ITvShows } from '../../../types/TvShowTypes'
import Pagination from '../../shared/Pagination.tsx/Pagination'
import styles from './style.module.css'
import FilmItem from '../../shared/FilmItem/FilmItem'

const TvShows = () => {
  const dispatch: any = useAppDispatch()
  const changePage = async (page: number) => {
    dispatch(getTvShows(page))
  }
  const { popularTvShows } = useAppSelector(state => state.tvShows)
  return (
    <>
      {popularTvShows.length === 0 ? <Loading /> : (<>
        <div className={styles.items}>
          {popularTvShows.map((el: ITvShows) => (
            <FilmItem key={el.id} id={el.id} img={el.poster_path} title={el.original_name} vote_average={el.vote_average} release_date={el.first_air_date} type="tv" />
          ))}
        </div> <Pagination changePage={(page: number) => changePage(page)} />
        <br />
        <br />
      </>
      )}
    </>
  )
}

export default TvShows


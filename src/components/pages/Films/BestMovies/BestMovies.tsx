import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { IMovie } from '../../../../types/MoviesTypes'
import Pagination from '../../../shared/UI/Pagination.tsx/Pagination'
import Loading from '../../../shared/UI/Loading/Loading'
import FilmItem from '../../../shared/FilmItem/FilmItem'
import styles from './style.module.css'
import { getBestMovies} from '../../../../store/actions/MovieActionCreator'

const BestMovies: FC = () => {
    const dispatch: any = useAppDispatch()
    const { bestMovies } = useAppSelector(state => state.movies)

    const changePage = async (page: number) => {
        dispatch(getBestMovies(page))
    }
    return (
        <>
        {bestMovies.length === 0 ? <Loading /> : (<>
          <div className={styles.items}>
            {bestMovies.map((el: IMovie) => (
               <FilmItem  key={el.id} id={el.id} img={el.poster_path} title={el.title} vote_average={el.vote_average} release_date={el.release_date} type="movie"/>
            ))}
          </div> <Pagination changePage={(page: number) => changePage(page)} />
          <br/>
          <br/>
        </>
        )}
      </>
    )
}

export default BestMovies




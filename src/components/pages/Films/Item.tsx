import React, { FC, memo } from 'react'
import { IMovie } from '../../../types/MoviesTypes';
import FilmItem from '../../shared/FilmItem/FilmItem';
import Loading from '../../shared/UI/Loading/Loading';
import Pagination from '../../shared/UI/Pagination.tsx/Pagination';
import styles from './style.module.css'

interface ItemProps {
  data: [];
  changePage: (page: number) => void;
  type: string
}

const Item: FC<ItemProps> = memo(({ data, changePage, type }) => {
  return (
    <div>
      {data?.length === 0 ? <Loading /> : (<>
        <div className={styles.items}>
          {data?.map((el: IMovie) => (
            <FilmItem key={el.id} id={el.id} img={el.poster_path} title={el.original_name} vote_average={el.vote_average} release_date={el.first_air_date || el.release_date} type={type} />
          ))}
        </div> <Pagination changePage={(page: number) => changePage(page)} />
        <br />
        <br />
      </>
      )}
    </div>
  )
})

export default Item
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux';
import { getMoviesById, setSimularMoviesById, setSimularTvShowsById } from '../../store/actions/MovieActionCreator';
import { getTvShowsById } from '../../store/actions/TvShowActionCreator';
import styles from './style.module.css'


interface SearchItemsProps {
    id: number;
    img: string | null;
    name: string;
    vote_average: number;
    runtime: number;
    release_date: string;
    type: string;
}



const SearchItems: FC<SearchItemsProps> = ({ id, img, name, vote_average, runtime, release_date, type }) => {
    const dispatch = useAppDispatch()
    const click = () =>{
        if(type == 'movie'){
            dispatch(getMoviesById(id))
            dispatch(setSimularMoviesById(id))
        }else{
            dispatch(getTvShowsById(id))
            dispatch(setSimularTvShowsById(id))
        }
    }
    return (
        <>
        <Link to={type == 'movie' ? `/movie/${id}` : `tv/${id}`}>
                <div className={styles.item} onClick={()=> click()}>
                        <div className={styles.left}>
                            <div className={styles.img}>
                                {img == undefined ? ( (<img src='https://st.kp.yandex.net/images/film_big/4781063.jpg'/>) 
                                ) : <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${img}`} alt="img" />}
                            </div>
                            <div className={styles.info}>
                                <span className={styles.header}>{name.length > 30 ? `${name.substring(0, 30)} ...` : name}</span>
                                <span className={styles.time}>{release_date?.substring(0, 4)}</span>
                            </div>
                        </div>
                        <div className={styles.rating}>
                            {vote_average || 0}
                        </div>
                </div>
                </Link>
                </>
    )
}

export default SearchItems
import React, { FC } from 'react'
import { useAppSelector } from '../../../../hooks/redux'
import Loading from '../../../shared/UI/Loading/Loading'
import styles from '../style.module.css'
import MainFilmItems from '../../../shared/MainItems/MainFilmItems/MainFilmItems'
import Button from '../../../shared/UI/Buttons/ButtonMainPage/Button'

const PersonalFilmsItems: FC = () => {
    const { personalMovies } = useAppSelector(state => state.movies)
    return (
        <div className={styles.films}>
            <Button />
            <div className={styles.container}>
                {personalMovies.length === 0 ? <Loading /> : (
                    <MainFilmItems data={personalMovies} sliceEndNumber={personalMovies?.length} type="movie" />
                )}
            </div>
        </div>
    )
}

export default PersonalFilmsItems
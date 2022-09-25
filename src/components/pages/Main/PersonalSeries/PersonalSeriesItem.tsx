import  React, { FC } from 'react'
import { useAppSelector } from '../../../../hooks/redux'
import MainFilmItems from '../../../shared/MainItems/MainFilmItems/MainFilmItems'
import styles from '../style.module.css'
import Button from '../../../shared/UI/Buttons/ButtonMainPage/Button'

const PersonalSeriesItem: FC = () => {
    const { personalSeries } = useAppSelector(state => state.movies)
    return (
        <div className={styles.films}>
           <Button />
            <div className={styles.container}>
                <MainFilmItems data={personalSeries} sliceEndNumber={personalSeries?.length} type="tv"/>
            </div>
        </div>
    )
}

export default PersonalSeriesItem
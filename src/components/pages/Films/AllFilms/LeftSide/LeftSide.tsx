import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch } from '../../../../../hooks/redux'
import { sortingMovies } from '../../../../../store/actions/MovieActionCreator'
import styles from '../style.module.css'
import { Option } from '../../../../../types/Types'
import { useSettings } from '../../../../../helpers/settings/settings'

interface LeftSideProps {
    filmPage: number
}

const LeftSide: FC<LeftSideProps> = ({ filmPage }) => {
    useEffect(() => {
        const g: string | null = localStorage.getItem('genre')
        setGenre(Number(g))
    }, [])
    const dispatch: any = useAppDispatch()
    const { options, genres } = useSettings()
    const [rating1, setRating1] = useState<number>(1)
    const [rating2, setRating2] = useState<number>(10)
    const [genresType, setGenresType] = useState<string>('Драма')
    const [genre, setGenre] = useState<number>(18)

    const handleClick = () => {
        const d: any = [rating1, rating2, genre]
        localStorage.setItem('rating', d)
        dispatch(sortingMovies([filmPage, rating1, rating2, genres[genresType]]))
    }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGenresType(e.target.value)
        localStorage.setItem('genre', genres[e.target.value])
    }

    return (
        <div className={styles.left}>
            <div className={styles.left_body}>
                <h2 className={styles.rating_header}>Рейтинг</h2>
                <div className={styles.rating_inputs}>
                    <div className={styles.input_rating}>
                        <p>От</p>
                        <input onChange={e => setRating1(Number(e.target.value))} type="number" min="1" max="10" step="1" value={rating1 || ""} />
                    </div>
                    <div className={styles.input_rating}>
                        <p>До</p>
                        <input onChange={e => setRating2(Number(e.target.value))} type="number" min="1" max="10" step="1" value={rating2 || ""} />
                    </div>
                </div>
                <h2 className={styles.rating_header}>Жанр</h2>
                <select className={styles.select} onChange={(e) => handleChange(e)} >
                    {options.map((item: Option) => (
                        <option selected={item.id === genre}>{item.name}</option>
                    ))}
                </select>
                <div className={styles.buttons}>
                    <button onClick={() => handleClick()} className={styles.button_1}>Применить</button>
                </div>
            </div>
        </div>
    )
}

export default LeftSide
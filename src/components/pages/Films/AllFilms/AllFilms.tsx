import React, {useState, useEffect} from 'react'
import styles from './style.module.css'

const AllFilms = () => {

    const [rating1, setRating1] = useState<number>(1)
    const [rating2, setRating2] = useState<number>(10)

    const [year1, setyear1] = useState<number>(1960)
    const [year2, setyear2] = useState<number>(2025)

    // useEffect(() => {
    //     getFilteredMovies(rating1, rating2, year1, year2, 1).then((data) => console.log(data))
    // } ,[])
    

  return (
    <div className={styles.container}>
        <div className={styles.movies}>
            <div className={styles.header}>
                <h1>Все фильмы</h1>
                <h2>Подборка фильмов всего мира</h2>
            </div>
            <div className={styles.body}>
                <div className={styles.left}>
                    <h2 className={styles.rating_header}>Рейтинг</h2>
                    <div className={styles.rating_inputs}>
                        <div className={styles.input_rating}>
                            <p>От</p>
                            <input onChange={e => setRating1(Number(e.target.value))} type="number" min="1" max="10" step="1" value={rating1 || ""}/>
                        </div>
                        <div className={styles.input_rating}>
                            <p>До</p>
                            <input onChange={e => setRating2(Number(e.target.value))} type="number" min="1" max="10"  step="1" value={rating2 || ""}/>
                        </div>
                    </div>
                    <h2 className={styles.rating_header}>Годы производства</h2>
                    <div className={styles.rating_inputs}>
                        <div className={styles.input_rating}>
                            <p>От</p>
                            <input type="number" min="1960" max="2025" step="1" />
                        </div>
                        <div className={styles.input_rating}>
                            <p>До</p>
                            <input type="number" min="1960" max="2025"  step="1" />
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.button_1}>Применить</button>
                    </div>
                </div>
                <div className={styles.right}>2</div>
            </div>
        </div>
    </div>
  )
}

export default AllFilms
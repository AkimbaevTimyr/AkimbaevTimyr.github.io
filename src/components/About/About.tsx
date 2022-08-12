import React, {FC} from 'react'
import styles from './style.module.css'

interface AboutProps{
  items: any[]
}


const About: FC<AboutProps> = ({items}) => {
  return (
    <ul className='about'>
      {items?.map((el) => (
          <li key={el.caption} className={styles.item}>
              <span className={styles.caption}>{el.caption}</span>
                  <span className={styles.value}>{el.value}</span>
          </li>
      ))}
</ul>
  )
}

export default About

{/* <div className={styles.about}>
<h2>О фильме</h2>
<ul className="about_list">
  <li className="list_item">
    <span>Страны: </span>
    <span>{productionCountries?.map((el: any) => el.name + ", ")}</span>
  </li>
  <li className="list_item">
    <span>Жанр: </span>
    <span>{genres?.map((el: any) => el.name + ", ")}</span>
  </li>
  <li className="list_item">
    <span>Слоган: </span>
    <span>{tagline || '—'}</span>
  </li>
  <li className="list_item">
    <span>Бюджет: </span>
    <span>{`$ ${budget?.toLocaleString('ru-RU')}` && '—'}</span>
  </li>
  <li className="list_item">
    <span>Время: </span>
    <span>{runtime} мин.</span>
  </li>
  <li className="list_item">
    <span>Премьера в мире: </span>
    <span>{releaseDate?.toLocaleString('ru-RU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
  </li>
</ul>
</div> */}
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

const Navigation: FC = () => {
    const navigation = [
        { name: 'Главная', href: '/', },
        { name: 'Избранное', href: '/watchlist', },
        { name: 'Фильмы', href: '/films', },
        { name: 'Сериалы', href: '/tvshows', },
    ]
  return (
    <div className={styles.nav}>
    {navigation.map((el: any) => (
        <Link to={el.href}><div className={styles.navItem}>{el.name}</div></Link>
    ))}
</div>
  )
}

export default Navigation
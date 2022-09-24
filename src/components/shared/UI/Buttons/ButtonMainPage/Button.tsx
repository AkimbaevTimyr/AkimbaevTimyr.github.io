import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

const Button = () => {
  return (
    <div className={styles.back}>
        <Link to="/">
          Назад
        </Link>
      </div>
  )
}

export default Button
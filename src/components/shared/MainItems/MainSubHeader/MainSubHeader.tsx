import React, {FC} from 'react'
import styles from './style.module.css'
import { Link } from 'react-router-dom'

interface MainSubHeaderProps {
    name: string;
    path: string;
}

const MainSubHeader: FC<MainSubHeaderProps> = ({name, path}) => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-between">
        <h2 className={styles.header}>
         {name}
        </h2>
        <span className={styles.watch_button}>
          <Link to={`${path}`}>
            Cмотреть все
          </Link>
        </span>
      </div>
  )
}

export default MainSubHeader
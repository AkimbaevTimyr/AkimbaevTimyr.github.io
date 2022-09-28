import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useSettings } from '../../../hooks/settings/settings'
import styles from './style.module.css'

const Navigation: FC = () => {
  const {navigation} = useSettings()
  return (
    <div className={styles.nav}>
      {navigation?.map((el: any, index) => (
        <Link  className="text-white mr-5 hover:scale-x-105 hover:scale-y-105" key={index} data-testid={el.testId} to={el.href}><div  className={styles.navItem}>{el.name}</div></Link>
      ))}
    </div>
  )
}

export default Navigation
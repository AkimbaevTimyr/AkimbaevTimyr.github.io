import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useSettings } from '../../../../hooks/settings/settings'
import styles from './style.module.css'

const Navigation: FC = () => {
  const { navigation } = useSettings()
  return (

    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
      <div className="flex-shrink-0 flex items-center">
        <Link to="/">
          <img
            className="block lg:hidden h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
            alt="Workflow"
          />
          <img
            className="hidden lg:block h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
            alt="Workflow"
          />
        </Link>
      </div>
      <div className="hidden sm:block sm:ml-6">
        <div className="flex space-x-4 mt-1">
          <div className={styles.nav}>
            {navigation?.map((el: any, index) => (
              <Link className="text-white mr-5 hover:scale-x-105 hover:scale-y-105" key={index} data-testid={el.testId} to={el.href}><div className={styles.navItem}>{el.name}</div></Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
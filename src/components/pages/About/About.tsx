import React, {FC} from 'react'
import styles from './style.module.css'

type Obj = {
  caption: string;
  value: any
}

interface AboutProps{
  items: Obj[]
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


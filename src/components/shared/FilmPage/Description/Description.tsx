import React, {FC, memo} from 'react'
import styles from './style.module.css'

interface DescriptionProps {
    description?: string;
}

const Description: FC<DescriptionProps> = memo(({description}) => {
  return (
    <div className={styles.desc}>
        <h2 className={styles.subheader}>Описание</h2>
        {description}
    </div>
  )
})

export default Description
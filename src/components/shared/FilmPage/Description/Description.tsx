import React, {FC} from 'react'
import styles from './style.module.css'

interface DescriptionProps {
    description: string | undefined;
}

const Description: FC<DescriptionProps> = ({description}) => {
  return (
    <div className={styles.desc}>
        <h2 className={styles.subheader}>Описание</h2>
        {description}
    </div>
  )
}

export default Description
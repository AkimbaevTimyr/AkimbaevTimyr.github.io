import React, { FC } from 'react'
import styles from './style.module.css'

interface ButtonProps {
    name: string
    handleClick: () => void
}

const Button: FC<ButtonProps> = ({ name,  handleClick }) => {
    function render(){
        if (name === "Удалить") {
            return <button  data-testid="button" onClick={() => handleClick()} className={styles.button_watch_later}>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                    strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Удалить
            </button>
        }else{
            return <button data-testid="button" onClick={() => handleClick()} className={styles.button_watch_later}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
            Буду смотреть
        </button>
        }
    }
    
    return (
        <div>{render()}</div>
    )
}

export default Button
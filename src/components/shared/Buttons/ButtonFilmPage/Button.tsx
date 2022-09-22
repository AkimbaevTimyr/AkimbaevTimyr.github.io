import React, { FC } from 'react'

interface ButtonProps {
    name: string
    handleClick: () => void
}

const Button: FC<ButtonProps> = ({ name,  handleClick }) => {
    function render(){
        if (name === "Удалить") {
            return <div onClick={() => handleClick()} className="button_watch_later">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                    stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Удалить
            </div>
        }else{
            return <div onClick={() => handleClick()} className="button_watch_later">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
            Буду смотреть
        </div>
        }
    }
    
    return (
        <div>{render()}</div>
    )
}

export default Button
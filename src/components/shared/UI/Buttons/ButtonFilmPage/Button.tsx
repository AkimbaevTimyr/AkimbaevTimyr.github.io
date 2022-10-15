import React, { FC, memo } from 'react'
import { GetIsFIlmAdded } from '../../../../../hooks/getIsFIlmAdded/GetIsFIlmAdded';
import { getUser } from '../../../../../hooks/getUser/getUser';
import { useAppDispatch } from '../../../../../hooks/redux';
import { addFavoriteMovie, deleteMovieById } from '../../../../../store/actions/MovieActionCreator'
import styles from './style.module.css'

interface ButtonProps {
    id: string | undefined;
    data: [];
    type: string | null;
}

const Button: FC<ButtonProps> = memo(({ id, data, type  }) => {
    const {email} = getUser()
    const {handleClick, isFilmAdded} = GetIsFIlmAdded(id)
    const dispatch: any = useAppDispatch()
    const addFavorite = () => {
        handleClick()
        dispatch(addFavoriteMovie([email, `${type}`, data]))
    }
    const deleteFavorites = () => {
        handleClick()
        dispatch(deleteMovieById(id))
    }
    function render(){
        if (isFilmAdded) {
            return <button  data-testid="button" onClick={deleteFavorites} className={styles.button_watch_later}>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                    strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Удалить
            </button>
        }else{
            return <button data-testid="button" onClick={addFavorite} className={styles.button_watch_later}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
            Буду смотреть
        </button>
        }
    }
    
    return (
        <div>{render()}</div>
    )
})

export default Button


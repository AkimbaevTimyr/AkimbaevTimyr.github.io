import React, {useState, FC,} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { register } from '../../../store/actions/UserActionCreator';
import AuthItem from './AuthItem';

const Registration: FC = () => {
    const dispatch: any = useAppDispatch()
    const navigate = useNavigate()
    
    const handleClick = (email, password) =>{
        dispatch(register({navigate, email, password}))
    }
    return (
        <>
            <AuthItem  handleClick={(email, password) => handleClick(email, password)} header="Зарегистрироваться" path="/login" buttonName='Зарегистрироваться' p="Есть аккаунт?" linkText="Войди"/>
        </>
    )
}

export default Registration
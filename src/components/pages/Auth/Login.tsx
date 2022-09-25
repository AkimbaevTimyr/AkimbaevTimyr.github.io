import React, {useState, FC, } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { useAppDispatch, } from '../../../hooks/redux';
import {  login } from '../../../store/actions/UserActionCreator';
import AuthItem from './AuthItem';

const Login: FC = () => {
  const navigate = useNavigate()
  const dispatch: any = useAppDispatch()
  const handleClick = (email, password) => {
      dispatch(login({navigate, email, password}))
  }
  return (
      <>
        <AuthItem  handleClick={(email, password) => handleClick(email, password)} header="Войти" path="/registration" buttonName='Войти' p="Нет аккаунта?" linkText="Зарегистируйся"/>
      </>
  )
}

export default Login
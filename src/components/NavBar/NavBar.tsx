import React, { FC, useEffect, useState, useRef, useLayoutEffect } from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {  setIsAuth } from '../../store/actions/UserActionCreator'
import styles from './style.module.css'
import axios from 'axios'
import SearchItems from '../SearchMenu/SearchItems'

const navigation = [
    { name: 'Главная', href: '/', },
    { name: 'Избранное', href: '/watchlist', },
    { name: 'Фильмы', href: '/films', },
    { name: 'Сериалы', href: '/tvshows', },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const NavBar: FC = () => {
    const inputRef = useRef<HTMLHeadingElement>(null)
    useEffect(() => {
        document.addEventListener('click', (e: any) => {
            if (inputRef.current != null) {
                inputRef.current.style.display = 'none';
            }
        })
    }, [])
    const [searchValue, setSearchValue] = useState<string>('')
    const { isAuth } = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const [movies, setMovies] = useState<[]>([])
    const navigate = useNavigate()

    const click = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearchValue(e.target.value)
        let { data } = await axios.get<any>(`https://api.themoviedb.org/3/search/multi?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US&query=${searchValue}&page=1&include_adult=false`)
        setMovies(data.results)
        return ''
    }

    const handleExit = () =>{
        dispatch(setIsAuth(false))
        localStorage.setItem('token', '')
        navigate('/login')
    }


    return (
        <div className={styles.navBar}>
            <div className={styles.container}>
                <div className={styles.left}>
                    {navigation.map((el: any) => (
                        <Link to={el.href}><div className={styles.left_item}>{el.name}</div></Link>
                    ))}
                </div>
                <div className={styles.right}>
                    <div className={styles.search}>
                        <input placeholder='Поиск...' value={searchValue || ""} className={styles.search_input} onChange={e => click(e)} />
                        <Link to="/search-page">
                            <button title='Поиск по фильмам' type="submit" className="  top-0 right-0 p-2.5 text-sm font-medium text-white "><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                        </Link>
                        {searchValue.length === 0 ? '' :
                            <div ref={inputRef} className={styles.search_menu}>
                                <div id='items' className={styles.search_items}>
                                    {movies.length == 0 ? <div className={styles.empty}>По вашему запросу ничего не найдено</div> :
                                        movies.map((el: any) => (
                                            <SearchItems key={el.id} id={el.id} img={el.poster_path || el.babackdrop_path || el.profile_path} name={el.title || el.name} vote_average={el.vote_average} runtime={el.runtime} release_date={el.release_date || el.first_air_date} type={el.media_type} />
                                        ))}
                                </div>
                            </div>
                        }
                    </div>
                </div>
                {isAuth === true ? <div className={styles.signIn} onClick={()=> handleExit()}>Выйти</div> : <Link className={styles.signIn} to={"/login"}>Войти</Link>}
            </div>
        </div>
    )
}

export default NavBar



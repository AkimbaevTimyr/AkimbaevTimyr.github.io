import React, { FC, useEffect, useState, useRef, useLayoutEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setIsAuth } from '../../store/actions/UserActionCreator'
import styles from './style.module.css'
import axios from 'axios'
import SearchItems from '../SearchMenu/SearchItems'
import { useSettings } from '../../helpers/settings/settings'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const NavBar: FC = () => {
    const { navigation } = useSettings()
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
    const dispatch: any = useAppDispatch()
    const [movies, setMovies] = useState<[]>([])
    const navigate = useNavigate()

    const click = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearchValue(e.target.value)
        let { data } = await axios.get<any>(`https://api.themoviedb.org/3/search/multi?api_key=5ddccc04d5376e3e13b0cf0f39f6a00a&language=en-US&query=${searchValue}&page=1&include_adult=false`)
        setMovies(data.results)
    }

    const handleExit = () => {
        dispatch(setIsAuth(false))
        localStorage.setItem('token', '')
        navigate('/login')
    }


    return (
        // <div className={styles.navBar}>
        //     <div className={styles.container}>
        //         <div className={styles.left}>
        //             {navigation.map((el: any) => (
        //                 <Link to={el.href}><div className={styles.left_item}>{el.name}</div></Link>
        //             ))}
        //         </div>
        //         <div className={styles.right}>
        //             <div className={styles.search}>
        //                 <input placeholder='Поиск...' value={searchValue || ""} className={styles.search_input} onChange={e => click(e)} />
        //                 <Link to="/search-page">
        //                     <button title='Поиск по фильмам' type="submit" className="  top-0 right-0 p-2.5 text-sm font-medium text-white "><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
        //                 </Link>
        //                 <div className='mt-1'>
        //                     {searchValue.length === 0 ? '' :
        //                         <div ref={inputRef} className={styles.search_menu}>
        //                             <div id='items' className={styles.search_items}>
        //                                 {movies.length == 0 ? <div className={styles.empty}>По вашему запросу ничего не найдено</div> :
        //                                     movies.map((el: any) => (
        //                                         <SearchItems key={el.id} id={el.id} img={el.poster_path || el.babackdrop_path || el.profile_path} name={el.title || el.name} vote_average={el.vote_average} runtime={el.runtime} release_date={el.release_date || el.first_air_date} type={el.media_type} />
        //                                     ))}
        //                             </div>
        //                         </div>
        //                     }
        //                 </div>
        //             </div>
        //         </div>
        //         {isAuth === true ? <div className={styles.signIn} onClick={()=> handleExit()}>Выйти</div> : <Link className={styles.signIn} to={"/login"}>Войти</Link>}
        //     </div>
        // </div>
        <Disclosure as="nav" className="bg-neutral-900 ">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
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
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                //   className={classNames(
                                                //     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                //     'px-3 py-2 rounded-md text-sm font-medium'
                                                //   )}
                                                //   aria-current={item.current ? 'page' : undefined}
                                                className="text-white hover:scale-x-105 hover:scale-y-105"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* <div className={styles.right}>
                                    <div className={styles.search}>
                                        <input placeholder='Поиск...' value={searchValue || ""} className={styles.search_input} onChange={e => click(e)} />
                                        <Link to="/search-page">
                                            <button title='Поиск по фильмам' type="submit" className="  top-0 right-0 p-2.5 text-sm font-medium text-white "><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                                        </Link>
                                        <div className='mt-1'>
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
                                </div> */}

                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                  
                                    className="text-white ml-1"
                                // className={classNames(
                                //   item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                //   'block px-3 py-2 rounded-md text-base font-medium'
                                // )}
                                // aria-current={item.current ? 'page' : undefined}
                                >
                                    <Link to={item.href}>
                                    {item.name}
                                    </Link>
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default NavBar



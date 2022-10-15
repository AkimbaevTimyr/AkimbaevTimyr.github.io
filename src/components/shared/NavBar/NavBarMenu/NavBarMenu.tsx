import React from 'react'
import { Fragment } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { Menu, Transition } from '@headlessui/react'
import { Link, useNavigate } from 'react-router-dom'
import { setIsAuth } from '../../../../store/actions/UserActionCreator'
import { setUser } from '../../../../hooks/setUser/setUser'
import { FixMe } from '../../../../types/Types'

const NavBarMenu = () => {
    const dispatch: FixMe = useAppDispatch()
    const navigate = useNavigate()
    const { isAuth } = useAppSelector(state => state.user)
    const handleExit = () => {
        dispatch(setIsAuth(false))
        setUser("", "")
        navigate('/login')
    }

    return (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link to="/search-page">
                <button title='Поиск по фильмам' type="submit" className="  top-0 right-0 p-2.5 text-sm font-medium text-white "><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
            </Link>
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-3 w-48 pointer rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {isAuth == false ? <Menu.Item>
                            <Link
                                to="/login"
                                className='block px-4 py-2 text-sm text-gray-700 '
                            >
                                Войти
                            </Link>
                        </Menu.Item> : <Menu.Item>
                            <Link
                                to="/login"
                                onClick={handleExit}
                                className='block px-4 py-2 text-sm text-gray-700'
                            >
                                Выйти
                            </Link>
                        </Menu.Item>}
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export default NavBarMenu
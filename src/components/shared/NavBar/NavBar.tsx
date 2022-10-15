import React, { FC, } from 'react'
import { Link, } from 'react-router-dom'
import { Disclosure, } from '@headlessui/react'
import Navigation from './Navigation/Navigation'
import Panel from './Panel/Panel'
import NavBarMenu from './NavBarMenu/NavBarMenu'
import MobileMenu from './MobileMenu/MobileMenu'

const NavBar: FC = () => {

    return (
        <Disclosure as="nav" className="bg-neutral-900 ">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <MobileMenu open={open} />
                            <Navigation />
                            <NavBarMenu />
                        </div>
                    </div>
                    <Panel />
                </>
            )}
        </Disclosure>
    )
}

export default NavBar



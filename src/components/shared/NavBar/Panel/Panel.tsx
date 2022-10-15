import { Disclosure } from '@headlessui/react'
import React from 'react'
import { useSettings } from '../../../../hooks/settings/settings'
import { Link } from 'react-router-dom'

const Panel = () => {
    const {navigation} = useSettings()
    return (
        <div>
            <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                        <Disclosure.Button
                            key={item.name}
                            as="a"

                            className="text-white ml-1"
                        >
                            <Link to={item.href}>
                                {item.name}
                            </Link>
                        </Disclosure.Button>
                    ))}
                </div>
            </Disclosure.Panel>
    </div>
    )
}

export default Panel
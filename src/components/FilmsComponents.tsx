import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface FilmsComponentsProps {
    img: string;
    title: string;
    subtitle: string;
    link: string;
}

const FilmsComponents: FC<FilmsComponentsProps> = ({ img, title, subtitle, link }) => {
    return (
            <div >
                <div className='flex justify-center w-auto mt-5'>
                    <Link to={link}>
                        <img
                            className="w-36"
                            src={img}
                            alt=""
                        />
                    </Link>
                    <div className="p-8 sm:col-span-2 w-56">
                        <h5 className="mt-4 font-bold">{title}</h5>
                        <p className="mt-2 text-sm text-gray-500">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default FilmsComponents
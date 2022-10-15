import React, { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import Image from '../Image/Image'

interface FilmsComponentsProps {
    img: string;
    title: string;
    subtitle: string;
    link: string;
}

const FilmsComponents: FC<FilmsComponentsProps> = memo(({ img, title, subtitle, link }) => {
    return (
            <div >
                <div className='flex justify-center w-auto mt-5'>
                    <Link to={link}>
                        <Image  
                            src={img}  
                            className="w-36"
                            width={250}
                            height={160}
                        />
                    </Link>
                    <div className="p-8 sm:col-span-2 w-56">
                        <h5 className="mt-4 font-bold">{title}</h5>
                        <p data-testid="sub" className="mt-2 text-sm text-gray-500">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>
    )
})

export default FilmsComponents
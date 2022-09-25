import React, { FC } from 'react'
import { convertTimestampToDate } from '../../../../hooks/convertTimestampToDate/convertTimestampToDate';

interface ReviewsItemProps {
    author: string;
    content: string;
    created_at: string;
}


const ReviewsItem: FC<ReviewsItemProps> = ({ author, content, created_at }) => {
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="border-b-4 border-neutral-300 mr-5 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-gray-700 text-base">{content}</p>
                </div>
                <div className="flex items-center">
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">{author}</p>
                        <p className="text-gray-600">{convertTimestampToDate(created_at)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewsItem
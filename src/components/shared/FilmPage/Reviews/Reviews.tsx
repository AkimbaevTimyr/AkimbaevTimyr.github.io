import React, { FC, memo } from 'react'
import { useGetReviewsQuery } from '../../../../services/MovieService'
import ReviewsItem from './ReviewsItem';
import styles from './style.module.css'

interface ReviewsProps {
    id?: string ;
    type: string | null;
}

const Reviews: FC<ReviewsProps> = memo(({id, type}) => {
    const {data,  error, isLoading} = useGetReviewsQuery({type, id})
    return (
       <div className={styles.container}>
            <div className={styles.header}>{data?.results.length ? 'Отзывы зрителей' : ''}</div>
            <div className={styles.reviews}>
                {data?.results.map((el: any) => (
                    <ReviewsItem content={el.content} author={el.author} created_at={el.created_at} />
                ))}
            </div>
        </div>

    )
})

export default Reviews
import React , {FC}from 'react'
import './style.css'
import {Link } from 'react-router-dom'
interface SearchMenuProps {
    id: number;
    img: string | null;
    name: string;
    vote_average: number;
    runtime: number;
    release_date: string;
    type: string;
}


const  SearchMenu: FC<SearchMenuProps> = ({id, img, name, vote_average, runtime, release_date, type}) => {
    return (
        <>
        <Link to={type == 'tv' ? `/tv/${id}` : `/movie/${id}`}>
            <div className="search_item">
                <div className="search_left">
                    <div className="search_item_img">
                        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${img}`} alt="img" />
                    </div>
                    <div className="search_item_info">
                        <span className="search_item_header">{name}</span>
                        <span className="search_item_time">{release_date?.substring(0,4)}</span>
                    </div>
                </div>
                <div className="search_item_rating">
                    {vote_average || 0}
                </div>
            </div>
        </Link>
        </>
    )
}

export default SearchMenu
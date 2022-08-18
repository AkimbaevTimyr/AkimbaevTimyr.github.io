import React, { FC } from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom'
import { convertMovieType } from '../../helpers/convertMovieType/convertMovieType'

interface FilmItemProps {
    id: number;
    img: string | null;
    title: string | undefined;
    vote_average: number;
    release_date: string;
    type: string;
}

const FilmItem: FC<FilmItemProps> = ({ id, img, title, vote_average, release_date, type }) => {
    if(!img){
        return <img src='https://st.kp.yandex.net/images/film_big/4781063.jpg'/>
    }
    return (
//     <div className={styles.item}>
//         <div  className={styles.img}>
//             {img == undefined || null || img.length == 0? (<img src='https://st.kp.yandex.net/images/film_big/4781063.jpg'/>) : (<Link  to={`/${type}/${id}`}>
//                     <img  
//                         src={`https://image.tmdb.org/t/p/w220_and_h330_face/${img}`}
//                     />
//                 </Link>)}
//             <p className={styles.rating}>{vote_average?.toFixed(1)}</p>
//         </div>
//         <div className={styles.descr}>
//             <div className={styles.header}>
//                 {title || '—'}
//             </div>
//             <div className={styles.year}>
//                 {release_date?.substring(0,4) || '—'}, {convertMovieType(type)}
//             </div>
//         </div>
//     </div>    
//     <div className="min-h-screen bg-gray-100 py-6 flex  justify-center sm:py-12">
//     <div className="py-3 sm:max-w-xl sm:mx-auto">
//         <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
//         <div className="h-48 overflow-visible w-1/2">
//             <img className="rounded-3xl shadow-lg" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${img}`} alt="" />
//         </div>
//         <div className="flex flex-col w-1/2 space-y-4">
//             <div className="flex justify-between items-start">
//             <h2 className="text-3xl font-bold">{title}</h2>
//             </div>
//             <div>
//             <div className="text-sm text-gray-400">{release_date?.substring(0,4) || '—'}, {convertMovieType(type)}</div>
//             </div>
//             <p className=" text-gray-400 max-h-40 overflow-y-hidden">{}</p>
//         </div>

//         </div>
//     </div>
// </div>
        <div className="w-52 mb-5 ml-3" >
            <div className='relative hover:scale-x-105 hover:scale-y-105 transition-all'>
                <Link to={`/${type}/${id}`}>
                <img
                    className="object-cover w-48 "
                    src={`https://image.tmdb.org/t/p/w220_and_h330_face/${img}`}
                    alt=""
                />
                </Link>
                <span className="absolute ml-3 top-4 rounded-full px-3 py-1.5 bg-green-700 text-white font-medium text-xs">
                {vote_average.toFixed(1)}
            </span>
            </div>
            <h5 className="mt-5  text-xl font-bold text-gray-900">{title}</h5>
            <p className="max-w-sm mt-2 text-gray-700">
            {release_date?.substring(0,4) || '—'}, {convertMovieType(type)}
            </p>
            {/* <div className={styles.descr}>
         <div className={styles.header}>
                 {title || '—'}
             </div>
             <div className={styles.year}>
                 {release_date?.substring(0,4) || '—'}, {convertMovieType(type)}
            </div>
         </div> */}
        </div >
  )
}

export default FilmItem
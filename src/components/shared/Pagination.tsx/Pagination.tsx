import { useState, FC } from 'react'

interface PaginationProps{
    changePage: any;
}
const Pagination: FC<PaginationProps> = ({ changePage}) => {
    const [page, setPage] = useState<number>(1)
    const handleClickNext = () =>{
        setPage(page + 1)
        changePage(page+1)
    }
    const handleClickPrevios = () =>{
        setPage(page - 1)
        changePage(page-1)
    }
    return (
        <div className="flex items-center justify-center space-x-3 mt-5">
            <button onClick={()=> handleClickPrevios()} disabled={page === 1 ? true : false} className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
            </button>
            <p className="text-xs slate-900">
                {page}
            </p>
            <button onClick={()=> handleClickNext()}  className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    )
}

export default Pagination
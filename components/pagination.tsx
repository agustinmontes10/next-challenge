import React from "react";

type PaginationProps = {
    totalPages: number;
    currentPage: number;
    onPageChange: (pageNumber: number) => void;
};

const Pagination = ( { totalPages, currentPage, onPageChange }: PaginationProps ) => {

    return (
        <nav className="d-flex flex-wrap justify-content-center m-2">

            <button className="btn-page" onClick={() => onPageChange(currentPage - 1)}>
                Anterior
            </button>

            {
                (currentPage > 3) ?
                    <button className="btn-page" onClick={() => onPageChange(1)}>
                        1
                    </button>
                : ''
            }
            

            {
                (currentPage > 2) ?
                    <button className="btn-page" onClick={() => onPageChange(currentPage-2)}>
                        {currentPage-2}
                    </button>
                : ''
            }
            
            {
                (currentPage > 1) ?
                    <button className="btn-page" onClick={() => onPageChange(currentPage-1)}>
                        {currentPage-1}
                    </button>
                : ''
            }
            
                <button className="btn-page page-active" onClick={() => onPageChange(currentPage)}>
                    {currentPage}
                </button>
            
            {
                (currentPage < totalPages) ?
                    <button className="btn-page" onClick={() => onPageChange(currentPage+1)}>
                        {currentPage+1}
                    </button>
                : ''
            }
            
            {
                ( currentPage < (totalPages - 1) ) ?
                    <button className="btn-page" onClick={() => onPageChange(currentPage+2)}>
                        {currentPage+2}
                    </button>
                : ''
            }

            {
                (currentPage < (totalPages - 2)) ?
                    <button className="btn-page" onClick={() => onPageChange(totalPages)}>
                        {totalPages}
                    </button>
                : ''
            }

                <button className="btn-page" onClick={() => onPageChange(currentPage + 1)}>
                    Siguiente
                </button>
            
        </nav>
    );
};

export default Pagination;





import React from 'react';

const Pagination = ({changeOffset,page, pageCount }) => {
    return (
        <div className='pagination'>
            <button  className='pageChange' onClick={() => changeOffset('prev')} >
                prev
            </button>
           <div className='page'>
               {page}  /
           </div>

            <div className="pageCount">
                {pageCount}

            </div>
            <button className='pageChange' onClick={() => changeOffset('next')}>
                next
            </button>
        </div>
    );
};

export default Pagination;
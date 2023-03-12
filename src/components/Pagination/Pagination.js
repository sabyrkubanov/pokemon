import React from 'react'
import classes from "./Pagination.module.css";

const Pagination = ({ changeOffset, page, pageCount }) => {
  return (
    <div className={classes.box}>
        <button onClick={() => changeOffset('prev')}>
           Prev
        </button>
        {page}
        /
        {pageCount}
        <button onClick={() => changeOffset('next')}>
        Next
        </button>

    </div>
  )
}

export default Pagination
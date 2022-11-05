import React from 'react'
import './style/stylePagination.css'

const Pagination = ({ setCurrentPage, arrayPages, currentPage, quantityPages}) => {

    const prevPages = () => {
      if (currentPage - 1 === 0) {
        setCurrentPage(quantityPages);
      } else {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const nextPages = () => {
      if (currentPage + 1 > quantityPages) {
        setCurrentPage(1);
      } else {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const changePageTo = (n) => setCurrentPage(n);

  return (
    <div className="pagination-container">
      <div onClick={prevPages} className="pagination-prev-next">
        &#60;
      </div>
      <ul className="pagination-number">
        {arrayPages?.map((num) => (
          <li
            onClick={() => changePageTo(num)}
            key={num}
            className={
              currentPage === num ? `page-number page-active` : `page-number`
            }
          >
            {num}
          </li>
        ))}
      </ul>
      <div onClick={nextPages} className="pagination-prev-next">
        &#62;
      </div>
    </div>
  )
}

export default Pagination
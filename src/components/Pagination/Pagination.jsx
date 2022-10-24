import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Books from '../../modules/BooksList/Books'

const Pagination = ( { itemsPerPage, items }) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, items]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      // console.log(
      //   `User requested page number ${event.selected}, which is offset ${newOffset}`
      // );
      setItemOffset(newOffset);
    };
    
    return (
        <>
            <Books books={currentItems}/>
            <ReactPaginate
            nextLabel="Next"
            onPageChange={handlePageClick}
            marginPagesDisplayed={0}
            pageCount={pageCount}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item prev"
            nextClassName="page-item next"
            breakLabel="..."
            breakClassName="page-item"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            />
        </>
    );
}
export default Pagination
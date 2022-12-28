import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Books from "../../modules/BooksList/Books";
import ReviewItem from "../CustomerReviews/ReviewItem";

const Pagination = ({
  itemsPerPage,
  items,
  isReview = false,
  showReview = "none",
}) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {isReview ? (
        <>
          <ReviewItem showReview={showReview} currentItems={currentItems} />
          <Box display={showReview}>
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
          </Box>
        </>
      ) : (
        <>
          <Books books={currentItems} />
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
      )}
    </>
  );
};
export default Pagination;

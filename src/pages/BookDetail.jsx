import React, { useCallback, useEffect } from 'react'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import StoreFeatures from "../components/Features/StoreFeatures";
import Footer from "../components/Footer/Footer";
import BestSellerList from "../modules/BestSellerList/BestSellerList";
import DetailBook from "../modules/BookDetail/DetailBook";
import { useDispatch, useSelector } from "react-redux";
import { listBooks, BookById } from "../store/cases/book/action";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const BookDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { list, details} = useSelector((state) => state.book);

    const loadBooks = useCallback(async () => {
    try {
        // dispatch(listBooks());
        dispatch(BookById(id));
    } catch (error) {
        console.log(error);
    }
}, [id, dispatch]);

  useEffect(() => {
    loadBooks();
}, [id, loadBooks]);

if (details.isFetching) {
return <Loading />;
}
  return (
    <div>
        <Header />
        <Box bg="linear-gradient(90deg, #FBF7FC 22.24%, rgba(251, 247, 252, 0) 100%)">
            <Breadcrumb className="container" fontSize={"md"} pt={3} pb={3}>
            <BreadcrumbItem color='#8D28AD'>
                <BreadcrumbLink as={Link} to="/">
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem color='#8D28AD'>
                <BreadcrumbLink as={Link} to="/books">
                    Books
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem color='#755A7D'>
                <BreadcrumbLink as={Link} to="/book-detail" isCurrentPage>
                    {details.data.name}
                </BreadcrumbLink>
            </BreadcrumbItem>
            </Breadcrumb>
        </Box>
        <DetailBook {...details.data}/>
        <StoreFeatures />
        <Footer />
    </div>
  )
}

export default BookDetail

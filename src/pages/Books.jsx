import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Pagination from "../components/Pagination/Pagination";
import StoreFeatures from "../components/Features/StoreFeatures";
import Footer from "../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { listBooks } from "../store/cases/book/action";
import Loading from "../components/Loading/Loading";

const Books = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.book);

  const loadBooks = useCallback(async () => {
    try {
      dispatch(listBooks());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  if (list.isFetching) {
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
          <BreadcrumbItem color='#755A7D'>
            <BreadcrumbLink as={Link} to="/books" isCurrentPage>
              Books
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Pagination itemsPerPage={3} items={list.data}/>
      <StoreFeatures />
      <Footer />
    </div>
  );
};

export default Books;

import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import BestSellerList from "../modules/BestSellerList/BestSellerList";
import StoreFeatures from "../components/Features/StoreFeatures";
import Footer from "../components/Footer/Footer";
import Top10List from "../modules/Homepage/Top10List/Top10List";
import SelectedBooks from "../modules/Homepage/SelectedProducts/SelectedBooks";
import SliderBanner from "../modules/Homepage/SliderBanner/SliderBanner";
import FeaturedBookList from "../modules/Homepage/FeaturedBookList/FeaturedBookList";
import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { listBooks, listTopRating } from "../store/cases/book/action";
import Loading from "../components/Loading/Loading";
import Testimonials from "../modules/Homepage/Testimonials/Testimonials";

const Home = () => {
  const dispatch = useDispatch();
  const { list, topRating } = useSelector((state) => state.book);

  useEffect(() => {
    try {
      if (list.data.length <= 0) {
        dispatch(listBooks());
      }
      if (topRating.data.length <= 0) {
        dispatch(listTopRating());
      }
    } catch (error) {
      console.log(error)
    }
  }, [dispatch, list.data.length, topRating.data.length]);

  if (list.isFetching || topRating.isFetching) {
    return <Loading />;
  }
  
  return (
    <Box>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home page</title>
      </Helmet>
      <Header />
      <SliderBanner booksData={list.data} />
      <StoreFeatures />
      <SelectedBooks books={list.data} />
      <Top10List headerContent="10 Top Rated Books" books={topRating.data} />
      <BestSellerList headerContent="Best Sellers" booksData={list.data} />
      <FeaturedBookList headerContent="Featured Book" books={list.data} />
      <Testimonials />
      <Footer />
    </Box>
  );
};

export default Home;

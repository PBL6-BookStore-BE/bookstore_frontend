import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import BestSellerList from "../modules/BestSellerList/BestSellerList";
import StoreFeatures from "../components/Features/StoreFeatures";
import Footer from "../components/Footer/Footer";
import Top10List from "../modules/Homepage/Top10List/Top10List";
import SelectedBooks from "../modules/Homepage/SelectedProducts/SelectedBooks";
import { listbook } from "../modules/Homepage/Top10List/listbook";
import SliderBanner from "../modules/Homepage/SliderBanner/SliderBanner";
import FeaturedBookList from "../modules/Homepage/FeaturedBookList/FeaturedBookList"
import { getListBook } from "../apis/list-book.api";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res  = await getListBook();
      setData(res)
    };

    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <SliderBanner />
      <StoreFeatures />
      <SelectedBooks books={listbook} />
      <Top10List headerContent="10 Top Rated Books" books={listbook}/>
      <FeaturedBookList headerContent="Featured Book" books={listbook} />
      <BestSellerList headerContent="Best Sellers" booksData={data} />
      <StoreFeatures />
      <Footer />
    </div>
  );
};

export default Home;

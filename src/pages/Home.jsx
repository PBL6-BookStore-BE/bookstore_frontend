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
import { getListBookTop10 } from "../apis/list-book-top10.api";
import Loading from '../components/Loading/Loading'

const Home = () => {
  const [data, setData] = useState([]);
  const [booktop10, setDataBookTop10] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res  = await getListBook();
      const databooktop10 = await getListBookTop10();
      setData(res);
      setDataBookTop10(databooktop10);
      setLoading(false);

    };

    fetchData();
  }, []);
  if(loading){
    return <Loading />
  }
  return (
    <div>
      <Header />
      <SliderBanner booksData={data} />
      <StoreFeatures />
      <SelectedBooks books={data} />
      <Top10List headerContent="10 Top Rated Books" books={booktop10}/>
      <BestSellerList headerContent="Best Sellers" booksData={data} />
      <FeaturedBookList headerContent="Featured Book" books={data} />
      <StoreFeatures />
      <Footer />
    </div>
  );
};

export default Home;

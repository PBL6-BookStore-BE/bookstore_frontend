import React from "react";
import Header from "../components/Header/Header";
import BestSellerList from "../modules/BestSellerList/BestSellerList";
import StoreFeatures from "../components/Features/StoreFeatures";
import Footer from "../components/Footer/Footer";
import Top10List from "../modules/Homepage/Top10List/Top10List";
import SelectedBooks from "../modules/Homepage/SelectedProducts/SelectedBooks";
import { listbook } from "../modules/Homepage/Top10List/listbook";
import SliderBanner from "../modules/Homepage/SliderBanner/SliderBanner";


const DUMMY_BOOK_DATA = [
  {
    rating: 4.3,
    title: "Life of Wilds",
    author: "Jasmine Belle",
    price: "23.44",
    imageUrl: "./static-data/dummy-image-book.jpg",
    category: "Nature",
  },
  {
    rating: 4.1,
    title: "So You Want To Talk About Race",
    author: "Henry Martopo",
    price: "23.44",
    imageUrl: "./static-data/dummy-image-book.jpg",
    category: "Biography",
  },
  {
    rating: 4.1,
    title: "So You Want To Talk About Race",
    author: "Ijeoma Oluo",
    price: "23.44",
    imageUrl: "./static-data/dummy-image-book.jpg",
    category: "Biography",
  },
  {
    rating: 4.3,
    title: "Life of Wilds",
    author: "Jasmine Belle",
    price: "23.44",
    imageUrl: "./static-data/dummy-image-book.jpg",
    category: "Nature",
  },
  {
    rating: 4.1,
    title: "So You Want To Talk About Race",
    author: "Henry Martopo",
    price: "23.44",
    imageUrl: "./static-data/dummy-image-book.jpg",
    category: "Biography",
  },
  {
    rating: 4.1,
    title: "So You Want To Talk About Race",
    author: "Ijeoma Oluo",
    price: "23.44",
    imageUrl: "./static-data/dummy-image-book.jpg",
    category: "Biography",
  },
];
const Home = () => {
  return (
    <div>
      <Header />
      <SliderBanner />
      <StoreFeatures />
      <SelectedBooks books={listbook} />
      <Top10List headerContent="10 Top Rated Books" books={listbook}/>
      <BestSellerList headerContent="Best Sellers" booksData={DUMMY_BOOK_DATA} />
      <StoreFeatures />
      <Footer />
    </div>
  );
};

export default Home;

import React from 'react';
import Header from '../components/Header/Header';
import BestSellerList from '../modules/BestSellerList/BestSellerList';
import StoreFeatures from "../components/Features/StoreFeatures";
import Footer from "../components/Footer/Footer";
const Home = () => {
    return (
        <div class='container'>
            <Header />
            <BestSellerList />
            <StoreFeatures />
            <Footer />
        </div>
    );
};

export default Home;
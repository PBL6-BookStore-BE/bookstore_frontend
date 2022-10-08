import React from 'react';
import Header from '../components/Header/Header';
import BestSellerList from '../modules/BestSellerList/BestSellerList';
import StoreFeatures from "../components/Features/StoreFeatures";
import Footer from "../components/Footer/Footer";
const Home = () => {
    return (
        <div>
            <Header  />
            <BestSellerList headerContent='Best Sellers'/>
            <StoreFeatures />
            <Footer />
        </div>
    );
};

export default Home;
import React from 'react';
import ReviewShow from '../../User/ReviewShow/ReviewShow';
import Navigation from '../Shared/Navigation/Navigation';
import Accessories from './Accessories/Accessories';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Products from './Products/Products';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Accessories></Accessories>
            <Products></Products>
            <Subscribe></Subscribe>
            <ReviewShow></ReviewShow>
            <Footer></Footer>
        </div>
    );
};

export default Home;
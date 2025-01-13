import React from 'react';
import Banner from '../Banner/Banner';
import AboutTheBuilding from '../AboutTheBuilding/AboutTheBuilding';
import HomeCoupons from '../HomeCoupons/HomeCoupons';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutTheBuilding></AboutTheBuilding>
            <HomeCoupons></HomeCoupons>
        </div>
    );
};

export default Home;
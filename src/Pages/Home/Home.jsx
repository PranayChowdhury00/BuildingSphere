import React from 'react';
import Banner from '../Banner/Banner';
import AboutTheBuilding from '../AboutTheBuilding/AboutTheBuilding';
import HomeCoupons from '../HomeCoupons/HomeCoupons';
import ApartmentLocation from '../ApartmentLocation/ApartmentLocation';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutTheBuilding></AboutTheBuilding>
            <HomeCoupons></HomeCoupons>
            <ApartmentLocation></ApartmentLocation>
        </div>
    );
};

export default Home;
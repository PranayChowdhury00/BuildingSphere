import React from 'react';
import Banner from '../Banner/Banner';
import AboutTheBuilding from '../AboutTheBuilding/AboutTheBuilding';
import HomeCoupons from '../HomeCoupons/HomeCoupons';
import ApartmentLocation from '../ApartmentLocation/ApartmentLocation';
import Partners from './Partners/Partners';
import FeaturedProperties from './FeaturedProperties/FeaturedProperties';
import TotalUsersAndSell from './TotalUserAndSell/TotalUsersAndSell';
import BuySell from './BuySell/BuySell';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutTheBuilding></AboutTheBuilding>
            <HomeCoupons></HomeCoupons>
            <ApartmentLocation></ApartmentLocation>
            <Partners></Partners>
            <FeaturedProperties></FeaturedProperties>
            <TotalUsersAndSell></TotalUsersAndSell>
            <BuySell></BuySell>
        </div>
    );
};

export default Home;
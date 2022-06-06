import React from 'react';
import Banner from '../Banner/Banner';
import Package from '../Package/Package';
import Services from '../Services/Services';
import TestiMonials from '../TestiMonials/TestiMonials'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Package></Package>
            <TestiMonials></TestiMonials>
        </div>
    );
};

export default Home;
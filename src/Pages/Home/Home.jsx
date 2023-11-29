import React from 'react';
import Banner from './HomeContainer/Banner';
import OurCapabilities from './HomeContainer/OurCapabilities';
import StatisticsSection from './HomeContainer/StatisticsSection';
import TopDeliveryMan from './HomeContainer/TopDeliveryMan';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        
        <div>
            <Banner></Banner>
            <OurCapabilities></OurCapabilities>
            <StatisticsSection></StatisticsSection>
            <TopDeliveryMan></TopDeliveryMan>
            <Footer></Footer>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './HomeContainer/Banner';
import OurCapabilities from './HomeContainer/OurCapabilities';
import StatisticsSection from './HomeContainer/StatisticsSection';

const Home = () => {
    return (
        
        <div>
            <Banner></Banner>
            <OurCapabilities></OurCapabilities>
            <StatisticsSection></StatisticsSection>
        </div>
    );
};

export default Home;
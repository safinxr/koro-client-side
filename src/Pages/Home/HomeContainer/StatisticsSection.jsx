import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';
import icon1 from '../../../assets/Images/icon1.gif'
import icon2 from '../../../assets/Images/icon2.gif'
import icon3 from '../../../assets/Images/icon3.gif'
import bannerImg from '../../../assets/Images/banner-img.svg'
import useCount from '../../../Hooks/useCount';

const StatisticsSection = () => {
    const [registeredUsers, isLoading] = useCount('/alluserscount', 'userCount')
    const [bookedParcels, loading] = useCount('/allparcelcount', 'parcelCount')


    const deliveredParcels = 20;

    const [isVisible, setIsVisible] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    if (!isVisible && inView) {
        setIsVisible(true);
    }

    const inlineStyle = {
        backgroundImage: `url(${bannerImg})`,
    };

    return (
        <section className="bg-gray-100 py-20 mb-32">
            <div className="max-w-6xl mx-auto px-3 md:px-8 lg:px-0 text-center">

                {/* <SectionHeader text={'App Usage Statistics'}></SectionHeader> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: Number of Parcel Booked */}
                    <div style={inlineStyle}
                     className="p-6 rounded-lg shadow-md flex justify-around items-center bg-cover bg-center" ref={ref}>
                        <div className='text-[#4840C7] md:text-[#00A1FF] lg:text-[#4840C7] '>
                            <h3 className="text-xl font-semibold mb-2 ">Parcel Booked</h3>
                            <CountUp className='text-5xl font-bold' end={isVisible ? bookedParcels.count : 0} duration={3} separator="," />
                        </div>
                        <img className='w-14' src={icon1} alt="" />
                    </div>

                    {/* Card 2: Number of Parcel Delivered */}
                    <div style={inlineStyle}
                        className="bg-white p-6 rounded-lg shadow-md flex justify-around items-center bg-cover bg-center" ref={ref}>
                        <div className='text-[#4840C7] md:text-[#00A1FF] lg:text-[#4840C7]'>
                            <h3 className="text-xl font-semibold mb-2 ">Parcel Delivered</h3>
                            <CountUp className='text-5xl font-bold' end={isVisible ? deliveredParcels : 0} duration={3} separator="," />
                        </div>
                        <img className='w-14' src={icon2} alt="" />
                    </div>

                    {/* Card 3: Number of People Using Your App */}
                    <div style={inlineStyle}
                        className="bg-white p-6 rounded-lg shadow-md flex justify-around items-center bg-cover bg-center" ref={ref}>
                        <div className='text-[#4840C7] md:text-[#00A1FF] lg:text-[#4840C7]'>
                            <h3 className="text-xl font-semibold mb-2 ">Active Users</h3>
                            <CountUp className='text-5xl font-bold' end={isVisible ? registeredUsers.count : 0} duration={3} separator="," />
                        </div>
                        <img className='w-14' src={icon3} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatisticsSection;

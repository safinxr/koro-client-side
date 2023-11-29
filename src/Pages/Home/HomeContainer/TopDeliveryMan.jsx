import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader'
import { FaStar } from "react-icons/fa6"

const TopDeliveryMan = () => {
    const [data, setData] = useState([])
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [count, setCount] =useState(3)
    console.log(count);

    useEffect(()=>{
        axios('deliveryMan.json')
        .then(res => setData(res.data))
    },[])
    console.log(data);
    

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        if (windowWidth >= 1024){
            setCount(3)
            console.log('sfdlafjalfa');
        
        }
        else if (windowWidth >= 768 ){
            setCount(2)
            console.log('s11111a');
            
        }
        else if (windowWidth < 768){
            setCount(1)
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]); 



    console.log(windowWidth);


    return (
        <div className='mb-32 max-w-6xl mx-auto px-3 md:px-8 lg:px-0'>
            <SectionHeader text={'top five delivery man'}></SectionHeader>
            <Swiper
                slidesPerView={count}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2000,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {
                    data.map((singleData, index) => <SwiperSlide key={index}>
                        <div className="card  bg-base-100 shadow-xl mb-12">
                            <figure><img className='w-full h-[300px] object-cover' src={singleData.image}  /></figure>
                            <div className="card-body text-center">
                                <h2 className="text-xl font-bold uppercase">{singleData.name}</h2>
                                <p className='font-medium'>Total Parcels Delivered : {singleData.parcelsDelivered}</p>
                                <p className='font-medium flex justify-center'>Rating : {singleData.averageRatings} <span className='text-yellow-400 text-xl ms-2'><FaStar /></span></p>

                                
                            </div>
                        </div>
                    </SwiperSlide>)
                }
                
               </Swiper>
        </div>
    );
};

export default TopDeliveryMan;
import React from 'react';
import bannerImg from '../../../assets/Images/banner-img.svg'
import Lottie from "lottie-react";
import p3 from '../../../assets/p3.json'
import { TypeAnimation } from 'react-type-animation';
import { BiSearchAlt2 } from 'react-icons/bi';

const Banner = () => {
    const inlineStyle = {
        backgroundImage: `url(${bannerImg})`,
    };
    
    return (
        <div style={inlineStyle}
        className='bg-cover h-screen -mt-16'
        >
            <div className='max-w-6xl mx-auto px-3 md:px-8 lg:px-0 flex justify-between items-center h-full'>
                <div className='flex-1 mt-12'>
                    <div className='flex items-center'>
                        <TypeAnimation
                            cursor={false}
                            sequence={[
                                'welcome to koro',
                                1000,

                            ]}
                            speed={50}
                            className='text-3xl font-bold uppercase text-[#00A1FF]'
                        />
                        <img className='animate-bounce delay-1000 ' src="https://i.ibb.co/z8vGZPr/korofavicon.png" alt="" />
                    </div>
                    <h1 className='uppercase text-6xl font-bold leading-[70px] text-[#4341C2]'>Fastest and safest delivery</h1>
                    
                    {/* SEARCH BAR================ */}
                    <div className='pr-16'>
                        <div className='mt-4 w-full rounded-full font-medium border-2  border-[#00A1FF] flex items-center text-[#00A1FF]'>
                            <div className='px-4 text-xl'>
                                <BiSearchAlt2></BiSearchAlt2>
                            </div>

                            <input
                                required
                                // onChange={searchF}
                                // onKeyDown={handleKeyDown}
                                name='search'
                                className=' w-full h-full focus:outline-none bg-transparent'
                                type="text" placeholder='Type to search' />
                            <div
                                // onClick={searchBtn}
                                className='py-1.5 px-5 cursor-pointer rounded-r-full bg-[#00A1FF] '>
                                <h1 className='text-white'>Search</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <Lottie animationData={p3} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Banner;
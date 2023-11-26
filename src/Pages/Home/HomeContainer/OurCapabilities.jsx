import React from 'react';
import Lottie from "lottie-react";
import f1 from '../../../assets/f1.json'
import f2 from '../../../assets/f2.json'
import f3 from '../../../assets/f3.json'

const OurCapabilities = () => {
    return (
        <div className='max-w-6xl mx-auto my-32 px-3 md:px-8 lg:px-0'>
            <h1 
            className='uppercase text-2xl md:text-3xl font-bold mb-14 text-[#00A1FF] flex justify-center items-center'>
                <img className='animate-bounce me-2' src="https://i.ibb.co/z8vGZPr/korofavicon.png" alt="" /> 
                Our Best Features 
                <img className='animate-bounce ms-2' src="https://i.ibb.co/z8vGZPr/korofavicon.png" alt="" />
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className="card bg-base-100 shadow-one">
                    <figure className='p-12 h-72'>
                        <Lottie animationData={f1} loop={true} />
                    </figure>
                    <hr />
                    <div className="card-body pt-4">
                        <h2 className="card-title">Parcel Safety</h2>
                        <p>"Our advanced tracking system and secure packaging ensure your parcels are delivered safely and securely. Your peace of mind is our priority."</p>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-one">
                    <figure className='px-4 h-72'>
                        <Lottie animationData={f2} loop={true} />
                    </figure>
                    <hr />
                    <div className="card-body pt-4">
                        <h2 className="card-title">Super Fast Delivery</h2>
                        <p> "Experience lightning-fast deliveries with our streamlined logistics network. Your packages will reach their destination in record time, because we value your time."</p>



                    </div>
                </div>
                <div className="card bg-base-100 shadow-one">
                    <figure className='px-6 h-72'>
                        <Lottie animationData={f3} loop={true} />
                    </figure>
                    <hr />
                    <div className="card-body pt-4">
                        <h2 className="card-title">Real-time Tracking</h2>
                        <p> "Stay in control with our real-time tracking feature. Know exactly where your parcel is at any given moment. No more guessing - just peace of mind."</p>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurCapabilities;
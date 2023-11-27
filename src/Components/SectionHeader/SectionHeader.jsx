import React from 'react';

const SectionHeader = ({text}) => {
    console.log(text);
    return <div
        className='uppercase text-2xl md:text-3xl font-bold mb-14 text-[#00A1FF] flex justify-center items-center'>
        <img className='animate-bounce me-2' src="https://i.ibb.co/z8vGZPr/korofavicon.png" alt="" />
        <h1>{text}</h1>
        <img className='animate-bounce ms-2' src="https://i.ibb.co/z8vGZPr/korofavicon.png" alt="" />
    </div>
};

export default SectionHeader;
import React from 'react';
import u1 from '../../assets/u1.json'
import Lottie from "lottie-react";


const ComingSoon = ({width }) => {
    
    const divCss = 'w-[560px] mx-auto'
    console.log(width);
    return (
        <div className={width ? '': divCss}>
            <Lottie animationData={u1} loop={true} />
        </div>
    );
};

export default ComingSoon;
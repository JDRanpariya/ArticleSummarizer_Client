import React from 'react'
import Lottie from 'react-lottie';
import animationData from './lurking-cat-loading.json';



export default function Loading() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };


    return (
    <div>
      <div className='font-mono font-bold text-4xl text-center  text-gray-900 m-20 tracking-wider'>Processing...</div>
      <Lottie 
	    options={defaultOptions}
        height={500}
        width={500}
      />
    </div>
    )
}

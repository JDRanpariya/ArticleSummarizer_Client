import React from 'react'
import Lottie from 'react-lottie';
import animationData from './panda.json';

import '../pages/_app'



export default function Panda({ height, width }) {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };


    return (
        <div className=''>
      <Lottie
	    options={defaultOptions}
        height={height}
        width={width}
      />
      </div>

    )
}
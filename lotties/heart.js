import React from 'react'
import Lottie from 'react-lottie';
import animationData from './heart1.json';
import animationData2 from './heart2.json'
import '../pages/_app'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function Heart() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };


    return (
    <div className='flex flex-wrap justify-center'>
        <div className='flex-grow gap-x-2'></div>
        <h2 className='mt-16  text-gray-900 font-mono font-semibold tracking-wide'>Made With</h2>
      <Lottie 
	    options={defaultOptions}
        height={150}
        width={55}
      />
      <h2 className='mt-16 text-gray-900 font-mono font-semibold tracking-wide'>By JDRanpariya</h2>
      <div className='flex-grow'>
{/*        
      <FontAwesomeIcon icon={faLinkedinIn} size='md' pull="right" color='#0e76a8' /> */}
      
      </div>
    </div>
    )
}

export function Heart2() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData2,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };


    return (
        <div className='flex flex-wrap justify-center'>
        <div className='flex-grow gap-x-2'></div>
        <h2 className='mt-16 text-gray-900 font-mono font-semibold tracking-wide'>Made With</h2>
      <Lottie 
	    options={defaultOptions}
        height={50}
        width={33}
      />
      <h2 className='mt-16 text-gray-900 font-mono font-semibold tracking-wide'>By JDRanpariya</h2>
      <div className='flex-grow'></div>
    </div>
    )
}

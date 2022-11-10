import Cardone from './cards/Cardone';
import CardTwo from './cards/CardTwo';
import CardThree from './cards/CardThree';
import CardFour from './cards/CardFour';
import CardFive from './cards/CardFive';
import CardSix from './cards/CardSix';


import React from 'react'

const About = () => {
  return (
    <div className='bg-gray-300 flex flex-col justify-center'><h1 className='text-red-700 text-[50px] justify-center'>Recommendations</h1>
    <div  className='mx-[100px] flex '>
    <div className='px-4'><Cardone /></div> 
    <div className='px-4'><CardTwo /></div> 
    <div className='px-4'><CardThree /></div> 
    </div>
    <div className='mx-[100px] flex '>
    <div className='px-4'> <CardFour /></div> 
    <div className='px-4'> <CardFive /></div> 
    <div className='px-4'> <CardSix /></div>
   
    </div>
    </div>
  )
}

export default About;


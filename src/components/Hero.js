import React from 'react'
import Burger from './Images/Burger.png';

const hero = () => {
  return (
    <div className='flex'>

 <div className='Text'>
<h1 className='text-[50px] flex justify-center mx-[100px] my-[80px]'>
   <span className='font-black text-[72px]'>BURGER</span> WEEK
</h1>
<div className="text-yellow-400 mx-[10px]">
  <h1 className='font-black text-[50px]'>{`BURGER YOU `}<span className='text-red-700'>{`"DEMAND"`}</span></h1>
  <h1 className='font-black text-[50px]'>{`TASTE WE`}<span className='text-red-700'>{`"DELIVER"`}</span> </h1>
  <a><span className='text-red-700 text-[72px] hover:text-[75px] '>{`ORDER NOW`}</span> </a>
</div>
 </div>
 <div className='Image'>
<img src={Burger} alt='burgerImage' />
</div>
</div>


  )
}

export default hero
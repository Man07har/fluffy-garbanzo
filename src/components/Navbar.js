import React from 'react'

function Navbar() {
  return (
    <div className='fixed bg-gray-900 flex  h-[50px] w-[200px]  justify-center text-white '>
   <div className='text-white left flex space-x-5'>
   <div className='texto space-x-4 mx-[25px]'>
    <a href='Home.js' className='text-[20px]' >Home</a>
    <a href='Project.js' className='text-[20px]'>About</a>
   </div>

   </div>
      </div>
  )
}
export default Navbar;
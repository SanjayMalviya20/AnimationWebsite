import React from 'react'

const Footer = () => {
  return (
    <>
     <div  data-scroll  data-scroll-section data-scroll-speed="-.3" className="w-full h-screen gap-6 p-20 flex bg-zinc-950 ">
        <div className="w-1/2 flex flex-col justify-between h-full">
        <div className='footer'>
        <h1 className='text-[8vw] uppercase leading-none  font-mono font-semibold -mb-6'>Eye-</h1>
        <h1 className='text-[8vw] uppercase leading-none  font-mono font-semibold -mb-6'>Opening</h1>
        </div>
        <h1 className='text-4xl font-[cursive]'>Ani<span className='animate-pulse text-blue-700 font-extrabold'>o</span>motion</h1>

        </div>
    
        <div className="w-1/2 flex flex-col justify-evenly h-full">
        <div>
        <h1 className='text-[7vw]  h1 uppercase leading-none  font-mono font-semibold -mb-6'>Presentaions</h1>
     
        </div>
   

    <div className="dets">
        <a className='block text-3xl' href="#">Facebook</a>
        <a className='block text-3xl' href="#">Instagram</a>
        <a className='block text-3xl' href="#">Twitter</a>
    </div>
        </div>
        </div> 
    </>
  )
}

export default Footer

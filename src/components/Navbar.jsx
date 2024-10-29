import React from 'react'

const Navbar = () => {
  let links =["Services"," Our work" ,"About us ","Insights","Contact"]
  return (
    <>
<div className=" items-center bg-transparent backdrop-blur-md fixed z-[999] w-full px-4 py-4 flex justify-between ">
  <h1 className='text-xl font-semibold'><span className='text-amber-400 font-[cursive]   text-2xl animate-pulse'>A</span>nim<span className=' text-2xl animate-pulse text-blue-500 font-[cursive] '>o</span>tion</h1>
  <div className='links  hidden   lg:flex lg:gap-8'>
    {links.map((link,index)=>{
       return( 
       <a href='#' className={`text-md cursor-pointer font-mono ${index===4 && "ml-40"} `}>{link}</a>)
    })}
  </div>

</div>

    </>
  )
}

export default Navbar

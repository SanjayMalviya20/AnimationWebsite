import { motion } from 'framer-motion'
import React from 'react'
import LocomotiveScroll from "locomotive-scroll";


const Marque = () => {
  const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-section]'),
      smooth: true,
      multiplier: 1,
      inertia: 0.4,
      direction: 'vertical',
      
      // getDirection: true,
      getSpeed: true,
      getDirection: true,
      getVelocity: true,
      lerp: 0.05,
      
      // ...and all the other options
  });
  scroll.scrollTo(9, 3);
  return (
    <>
      <div data-scroll-container data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full py-16 bg-[#0a283f]  rounded-tl-3xl rounded-tr-3xl  text-white">
        <div className='text border-b-[1px] border-t-[1px] py-5 border-zinc-300 overflow-hidden flex justify-between whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}}  transition={{ease:"linear", repeat:Infinity ,duration:5}}  className=' hello text-[18vw] leading-none font-bold font-mono  uppercase '>We are animotion </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}}  transition={{ease:"linear", repeat:Infinity ,duration:5}}  className=' hello text-[18vw] leading-none font-bold font-mono  uppercase '>We are animotion </motion.h1>
        </div>
      </div>
    </>
  )
}

export default Marque

import { delay, motion , useAnimation} from 'framer-motion'
import React ,{useState,useEffect}from 'react'
import {Power4} from "gsap"
import LocomotiveScroll from "locomotive-scroll";
const Featured = () => {
    // const [hover, sethover] = useState(false);
    const cards =[useAnimation(),useAnimation()]   //u can animate using this hooks
  const handlehover=(index)=>{
cards[index].start({y:"0"})
}
  const handlehoverEnd=(index)=>{
cards[index].start({y:"100%"})
}
  return (
    <>
     <div  className="w-full py-10">
<div className="w-full px-16 py-10 border-b-[1px] pb-20">
    <h1 className='text-7xl  tracking-tight font-light'>Featured projects</h1>
</div>
<div data-scroll  data-scroll-section data-scroll-speed="-.1" className="px-10">

<div className="cards w-full relative  flex gap-7 mt-10">
<h1  className='  flex  absolute z-40 uppercase overflow-hidden leading-none top-1/2 right-1/2 text-green-500  font-bold -translate-x-[-100px] text-8xl'>
    {"Fyde".split("").map((e,i)=>{return (<motion.span  transition={{ease:[0.22,1,0.36,1],delay:i*.05}} className='inline-block' animate={cards[0]} initial={{y:"100%"}} >{e}</motion.span>)})}
    </h1>
    
    <motion.div onHoverEnd={()=>{handlehoverEnd(0)}} onHoverStart={()=>{handlehover(0)}} className="w-1/2  cardcon rounded-lg  h-[70vh] ">
    <div className="w-full overflow-hidden  card duration-300 rounded lg h-full">
    <img  className='w-full h-full hover:scale-125 duration-300'  src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"/>
	
    </div>
    </motion.div>
    <h1 id='h1' className=' absolute z-40 uppercase overflow-hidden flex leading-none top-1/2  text-green-500  font-bold translate-x-[570px] text-8xl'>
    {"vise".split("").map((e,i)=>{return (<motion.span transition={{ease:[0.22,1,0.36,1],delay:i*.05}}  animate={cards[1]} initial={{y:"100%"}}   className="inline-block">{e}</motion.span>)})}
    </h1>
  
    <motion.div onHoverEnd={()=>{handlehoverEnd(1)}} onHoverStart={()=>{handlehover(1)}} className="w-1/2  cardcon rounded-lg  h-[70vh] ">
    <div className="w-full overflow-hidden  card duration-300 rounded lg h-full bg-red-800">
    <img  className='w-full h-full hover:scale-125 duration-300'  src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"/>
    </div>
    </motion.div>
</div>
</div>
    </div> 
    </>
  )
}

export default Featured
{/* <img className="bg-gray-200 hover:scale-125  w-full max-w-full rounded transition-transform group-hover:scale-110 duration-500 group-hover:duration-1000 entered loaded" data-component="lazyload" data-animate="data-animate" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" width="663" height="551" data-src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" data-srcset="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png 1x, https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png 2x" alt="image description" data-ll-status="loaded" srcset="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png 1x, https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png 2x" />		 */}
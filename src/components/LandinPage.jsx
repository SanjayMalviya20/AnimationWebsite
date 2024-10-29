import React from 'react'
import eyes from"./eyest.png"
import {animate, motion} from "framer-motion"
const LandinPage = () => {
  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed="-.3" className=" lg:h-screen     pt-1 bg-zinc-950">
        <div className="textstruct mt-44 px-20 landing ">
  
            {["We Create","eye opening","presentaions"].map((items,i)=>{

          return  (<div className="masker w-[60vw] font-black">
            <div className="w-fit flex justify-center items-center overflow-hidden  space-y-3">
          {i===1 && (<motion.div id='motion' initial={{width:0}} transition={{ease:[0.22, 1, 0.36, 1],duration:1}}  animate={{width:"10vw"}}  className={`w-[10vw] bg-blue-400 flex justify-center items-center rounded-lg h-[5vh] relative top-3 mr-[0.4vw]  lg:w-[10vw] lg:bg-green-400 lg:flex lg:justify-center lg:items-center lg:rounded-lg lg:h-[5vw] lg:relative lg:top-3 lg:mr-[0.4vw]`}>
            <img id='img' className='w-full h-70 rounded-lg' src={eyes} alt="" />
          </motion.div>)}
                <h1  id="text" className='text-[6rem]  leading-[6vw]  uppercase'>{items}</h1>
                </div>
            </div>)
            })}
          
        </div>
      <div id='divbox' className='mt-20 flex justify-between items-center border-t-[1px] py-5 px-20 h-9 border-zinc-800 '>
        {["for public and private company", "from the first pitch to IPO"].map((items,i)=>{
return <p className='font-medium tracking-tighter'>{(items)}</p>
        })}
        <div className="start flex justify-center items-center">
            <div className='px-5 mt-[14px] py-2 flex justify-center items-center gap-x-2 border-2 hover:bg-black rounded-full transition-all uppercase text-sm  border-zinc-500'>start the project
              <div id='btn' className='h-5 w-5 flex justify-center items-center'>

            <div className="w-2 h-2 duration-200 hover:w-5 hover:h-5 rounded-full bg-teal-400"></div>
              </div>
            </div>
            
        </div>
      </div>
      </div>
    </>
  )
}

export default LandinPage

import React ,{useState} from 'react'
import {motion} from "framer-motion"
const About = () => {
//   const [ro, setro] = useState(0);
//   const [val, setval] = useState(1);
//   const [color, setColor] = useState("blue");
//   const rovage =()=>{ 
//     let a= Math.round(360*Math.random())
//     console.log(a)
//     setro(a)
//   }

//  const run=()=>{
//   let v= "green"
//   if(color==="blue"){
//     setColor(v)
//   }
//   else{
//     setColor("blue")
//   }
// let a=1.5
// if(val===1){
// setval(a)
// }
// else{
//   setval(1)
// }

//   }
  return (
    <>
      <div className="w-full px-20  text-black font-semibold py-20 bg-[#c5eb3a] rounded-tl-3xl rounded-tr-3xl ">
        <h1 className='text-[4vw] tracking-tight leading-[4vw]  '>Animotion is a strategic partner fot fast-growing tech bussiness that need to raise funds ,<span className='underline'>sell products,explain complex ideas</span> ,and hire great people.</h1>
        <div className="w-full aboutus mt-[2vw] flex justify-between  border-t-[2px] border-[#6b6b1b]">
          <div className="mt-24 space-y-4">
<h1 className='text-5xl font-semibold'>Our approach :)</h1>
<button className='bg-black flex  justify-center font-semibold font-mono items-center gap-7 px-7 rounded-full text-white py-5'>Read More
  <div className='w-5 h-5 flex items-center justify-center'>
<div  className="w-2 h-2  duration-200  rounded-full hover:w-5 hover:h-5 bg-white"></div>
  </div>
</button>
          </div>
         
<motion.div  /* onClick={run}   animate={{x:-100, rotate:ro, skewX:val, scaleX:val}} initial={{opacity:1  }} style={{backgroundColor:color}} */className="w-[40vw] h-[70vh] greenbox mt-4 rounded-2xl bg-[#87ee21]"></motion.div>
        </div>
      </div>
    </>
  )
}

export default About

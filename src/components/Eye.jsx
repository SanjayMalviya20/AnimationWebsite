import React,{useEffect,useState} from 'react'
import bgimg from "./bgimg.jpg"
const Eye = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
  window.addEventListener("mousemove",(e)=>{
// console.log(innerWidth/2,innerHeight/2)
let mouseX =e.clientX
let mouseY=e.clientY
let deltaX=mouseX - window.innerWidth/2
let deltaY=mouseY- window.innerHeight/2
var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI)
setRotate(angle-180)

  })  
  });
  return (
    <>
      <div className="h-[100vh] w-full bg-white overflow-hidden rounded-md border-black border-[1px]">
        <div data-scroll data-scroll-section data-scroll-speed="-.4" className={`h-full flex justify-center items-center relative w-full bg-no-repeat bg-center bg-[1100px,1px] bg-[url("https://static.vecteezy.com/system/resources/thumbnails/044/303/808/small/large-ball-with-rotating-circle-design-colored-ball-with-balls-rotating-around-on-black-background-model-of-electrons-molecules-or-gravity-in-balls-video.jpg")] `}>
       <div className='absolute  flex gap-8  '>
<div className="w-[13vw] h-[13vw] rounded-full flex  items-center bg-zinc-200">
<div className="w-[8vw] h-[8vw] rounded-full flex items-center  bg-zinc-900">
<div  style={{transform:`rotate(${rotate}deg)`}} className='w-full h-8 '>
<div className="w-5 h-5 rounded-full   bg-zinc-200">
</div>
</div>
 </div>
</div>
<div className="w-[13vw] h-[13vw] rounded-full flex  items-center bg-zinc-200">
<div className="w-[8vw] h-[8vw] rounded-full flex items-center  bg-zinc-900">
<div  style={{transform:`rotate(${rotate}deg)`}} className='w-full h-8 '>
<div className="w-5 h-5 rounded-full   bg-zinc-200">
</div>
</div>
 </div>
</div>





       </div>
        </div>
      </div>
    </>
  )
}

export default Eye

import React from 'react'

const Cards = () => {
  return (
    <>
      <div id='cardsection' className=" w-full h-screen flex items-center px-20 gap-7 bg-zinc-300">
<div  className='cardscon h-[50vh] w-1/2'>
<div id='firstcard' className="cards relative rounded-lg  w-full h-full flex justify-center items-center bg-green-900">
    <h1 className='text-5xl font-medium text-blue-600'>Anim<span className='text-black'>o</span>tion</h1>
    <button className='absolute left-10 bottom-10 rounded-full text-blue-500  border-[1px]  px-3  py-1'>&copy;:2019-2022</button>
</div> 
</div> 
<div className=' con h-[50vh] flex gap-7 w-[60%]'>
<div className=" sceondcard relative rounded-lg  w-1/2 h-full flex justify-center items-center bg-zinc-900">
<h1 className='text-5xl font-medium text-blue-600'>Anim<span className='text-black'>o</span>tion</h1>
<button className='absolute left-10 bottom-10 rounded-full text-blue-500  border-[1px]  px-3  py-1'>hello</button>
</div> 
<div className=" sceondcard relative rounded-lg  w-1/2 h-full flex justify-center items-center bg-zinc-900">
<h1 className='text-5xl font-medium text-blue-600'>Anim<span className='text-black'>o</span>tion</h1>
<button className='absolute left-10 bottom-10 rounded-full text-blue-500  border-[1px]  px-3  py-1'>hello</button>
</div> 

</div>
      </div>
    </>
  )
}

export default Cards

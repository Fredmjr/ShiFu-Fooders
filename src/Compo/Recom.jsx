import React from 'react'

const Recom = () => {
  return (
    <div className='py-5 sm:px-[100px] px-[20px] '>
      <p>Trending</p>
      <br />
     <div className='flex justify-between flex-wrap'>
     
     <div className='bg-neutral-700 bg-opacity-[30%]  w-[210px] lg:w-[270px] h-[250px] p-2 rounded-md border-neutral-600 border-[1px] mb-2 overflow-hidden'>
      <div className='w-full h-[60%] bg-neutral-700 rounded-sm p-1 flex justify-center items-center relative'>
        <span className='flex justify-center'><img src=".\src\assets\img\Ci-Fan-Tuan-(Rice-Ball).png" width="100" alt="" /></span>
        <span className='font-semibold text-white text-xs absolute top-0 right-0 m-2'>
        <div className=' bg-orange-500 h-[34px] w-11 p-1 rounded-sm text-center'>
          <span>K9.99</span>
          <p className='text-[8px] my-[-3px]'>Each</p>
          </div>
        
        </span>
      </div>
      <div className='w-full h-[40%]'>
        <span>
        <span className='font-extrabold text-orange-500 text-sm'>Ci-Fan-Tuan</span><br />
        <span className='font-extralight text-[11px] text-neutral-300'>(Rice Balls)</span>
        <span className='flex justify-between'>
          <span className='flex gap-[1px] items-center'>
            <img src=".\src\assets\icons\star.png" width="10" alt="" />
            <img src=".\src\assets\icons\star.png" width="10" alt="" />
            <img src=".\src\assets\icons\star.png" width="10" alt="" />
            <img src=".\src\assets\icons\star.png" width="10" alt="" />
            <img src=".\src\assets\icons\star (1).png" width="10" alt="" className='brightness-[0] invert-[1]' />
            <span className='font-extralight text-[11px] px-1'>(Reviews)</span>
            </span>
            
        </span>
        </span>
        <span className='text-[10px] flex gap-2 justify-between'>
            <button className='h-7 bg-orange-500 hover:bg-opacity-[80%] w-[48%] rounded-sm my-1'>Add to cart</button>
            <button className='h-7 bg-transparent hover:bg-neutral-500 w-[48%] rounded-sm border-[1px] border-neutral-500 my-1'>Buy Now</button>
          </span>
      </div>
     </div>
     <div className='bg-neutral-700 bg-opacity-[30%]  w-[210px] lg:w-[270px] h-[250px] p-2 rounded-md border-neutral-600 border-[1px] mb-2'>ff</div>
     <div className='bg-neutral-700 bg-opacity-[30%]  w-[210px] lg:w-[270px] h-[250px] p-2 rounded-md border-neutral-600 border-[1px] mb-2'>ff</div>
     <div className='bg-neutral-700 bg-opacity-[30%]  w-[210px] lg:w-[270px] h-[250px] p-2 rounded-md border-neutral-600 border-[1px] mb-2'>ff</div>
     <div className='bg-neutral-700 bg-opacity-[30%]  w-[210px] lg:w-[270px] h-[250px] p-2 rounded-md border-neutral-600 border-[1px] mb-2'>ff</div>
     <div className='bg-neutral-700 bg-opacity-[30%]  w-[210px] lg:w-[270px] h-[250px] p-2 rounded-md border-neutral-600 border-[1px] mb-2'>ff</div>
     </div>
    </div>
  )
}

export default Recom
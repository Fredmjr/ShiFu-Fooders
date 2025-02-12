import React from 'react'
import { Link } from 'react-router-dom'

const Loca = () => {
  return (
    <div className='p-5 bg-neutral-700'>
      <div className='p-5 bg-neutral-800 rounded-lg h-fit flex justify-between overflow-hidden'>
        <span className='w-full'>
          <p className='font-bold text-lg'>Want to visit?</p>
          <span className='text-[10px]'>
          <span className='text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum libero perferendis, quia voluptas voluptatibus officia labore </span>
          <p className='text-neutral-400 flex gap-2 items-center'>
            <span className='bg-neutral-7800 p-[5px] rounded-full border-[1px] border-neutral-500'><img src=".\src\assets\icons\home.png" alt="" width="13" className='brightness-[0] invert-[1]' /></span>
            <span>Plot No.50004, Along Great East Road</span>
            </p>
            <br />
          <span className='w-full flex justify-end'><Link to="https://maps.app.goo.gl/VSzT8fVhdvX7zaHi8"><button className='bg-neutral-600 hover:bg-orange-500 h-7 w-28 rounded-sm text-xs'>Go now!</button></Link></span>
        </span>
        </span>
      </div>
    </div>
  )
}

export default Loca
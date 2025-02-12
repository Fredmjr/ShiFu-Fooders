import React from 'react'

const DashBoard = () => {
  return (
    <div className='h-[400px] flex justify-center items-center'>
        <div className='text-center'>
            <span className='flex justify-center opacity-[50%]'>
                <img src=".\src\assets\icons\user.png" width="80" alt="" className='brightness-[0] invert-[1]' />
            </span>
            
           <p className='font-bold text-lg'>DashBoard</p>
        <p className='text-red-500 text-[10px]'>Please sign in to see your DashBoard!</p> 
        </div>
        
    </div>
  )
}

export default DashBoard
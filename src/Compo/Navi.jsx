import React from 'react'
import { Link } from 'react-router-dom'

const Navi = () => {
  return (
    <div className=' bg-orange-500 h-16 py-2 relative flex justify-center z-10'>
        <div className='flex justify-between text-[11px] w-full px-[50px]'>
          <span className='flex gap-2'>
            <span className='mt-1'><img src=".\src\assets\icons\mail-inbox-app.png" alt="" width="15" className='brightness-[0] invert-[1]' /></span>
            <span>@shifufooders@gmail.com</span>
          </span>
          <span>+260 975986004 / +260 760932304</span>
        </div>
        <div className='absolute bottom-[-20px] bg-neutral-700 rounded-full h-12 w-[90%] flex justify-between items-center px-2'>
        <span className='h-10 w-10 bg-neutral-800 rounded-full flex justify-center items-center border-neutral-500 border-[1px]'><img src=".\src\assets\logos\ShiFu-Fooders-Logo.png" alt="" width="30" /></span>
        <span>gugsah</span>
        <span className='flex  gap-3 items-center
        '>
          <span className='flex'>
            <span className='h-8 w-8 rounded-full flex justify-center items-center border-neutral-700 border-[1px]'>
              <span className='hover:opacity-[50%] cursor-pointer'>
                <Link to="/Menu">
                <img src=".\src\assets\icons\icons8-search-50.png" alt="" width="18" className='brightness-[0] invert-[1]' />
                </Link>
              </span>
              </span>
            <span className='h-8 w-[1px] mx-1 bg-neutral-600 rounded-sm'></span>
            <Link to="/DashBoard">
            <span className='relative h-8 w-8 rounded-full flex justify-center items-center'>
              <div className='absolute z-10 top-[0px] right-[-4px] h-[15px] w-[16px] bg-red-500 rounded-sm flex justify-center items-center text-[9px]'>0</div>
              <span className='hover:opacity-[50%] cursor-pointer'><img src=".\src\assets\icons\cart.png" alt="" width="18" className='brightness-[0] invert-[1]' />
              </span>
            </span>
            </Link>
          </span>
          <span className='h-10 w-30 bg-neutral-800 rounded-full flex justify-between px-1 items-center border-neutral-600 border-[1px]'>
            <Link to="/DashBoard">
            <span className='h-8 w-8 bg-neutral-800 hover:bg-neutral-600 rounded-full flex justify-center items-center border-neutral-500 border-[1px]'><img src=".\src\assets\icons\avatar_male_man_people_person_profile_user_icon_123199.png" alt="" width="18" className='brighness-[0] invert-[1]' /></span>
            </Link>
            <span className='text-[8px]'>
              <p className='px-2'>ShiFu Fooders</p>
            </span>
          </span>
        </span>
        </div>
    </div>
  )
}

export default Navi
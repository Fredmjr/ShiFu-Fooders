import React from 'react'
import { Link } from 'react-router-dom'

const Head = () => {
  return (
    <>
    <div className='bg-[url("./src/assets/img/ShiFu-Fooders-Wallpaper-v2.png")] bg-cover bg-center bg-no-repeat'>
      <div className=' h-[400px] bg-neutral-900 bg-opacity-[40%] relative flex justify-center'>
            <div className='hidden lg:block absolute bottom-0 w-full'>
              <div className='flex justify-center'>
              <div className='flex items-center bg-neutral-800 rounded-t-2xl h-14 w-[70%] justify-evenly px-5 gap-3'>
              <Link to="/Todays"><div className='hover:text-neutral-400 text-center hover:border-b-2 py-2 border-orange-500 w-[100px]'>Today's Specials</div></Link>
              <Link to="/Menu"><div className='hover:text-neutral-400 text-center hover:border-b-2 py-2 border-orange-500 w-[100px]'>Today's Menu</div></Link>
              <Link to="/About"><div className='hover:text-neutral-400 text-center hover:border-b-2 py-2 border-orange-500 w-[100px]'>About us</div></Link>
              <Link to="/Testimonials"><div className='hover:text-neutral-400 text-center hover:border-b-2 py-2 border-orange-500 w-[100px]'>Testimonials</div></Link>
              <Link to="/FAQs"><div className='hover:text-neutral-400 text-center hover:border-b-2 py-2 border-orange-500 w-[100px]'>FAQs</div></Link>
            </div>
              </div>
            </div>

            {/*   For Mdeium & small screen */}
            <div className=' lg:hidden absolute bottom-0 w-full'>
              <div className='flex justify-center relative'>
                <span className=' bg-neutral-800 w-[30%] rounded-t-xl flex justify-center items-center h-14'>
                <span className='hover:bg-orange-500 rounded-sm p-2 cursor-pointer'>
                <img src=".\src\assets\icons\icons8-menu-100.png" width="20" alt="" className='brightness-[0] invert-[1]' />
                </span>
                <div className='h-fit w-fit p-3 bg-neutral-700 rounded-sm shadow-md absolute bottom-[-40px]'>
                <Link to="/Todays"><div className='hover:text-orange-500 text-center hover:bg-neutral-600 py-2 w-[100px] rounded-sm'>Today's Specials</div></Link>
              <Link to="/Menu"><div className='hover:text-orange-500 text-center hover:bg-neutral-600 py-2 w-[100px] rounded-sm'>Today's Menu</div></Link>
              <Link to="/About"><div className='hover:text-orange-500 text-center hover:bg-neutral-600 py-2 w-[100px] rounded-sm'>About us</div></Link>
              <Link to="/Testimonials"><div className='hover:text-orange-500 text-center hover:bg-neutral-600 py-2 w-[100px] rounded-sm'>Testimonials</div></Link>
              <Link to="/FAQs"><div className='hover:text-orange-500 text-center hover:bg-neutral-600 py-2 w-[100px] rounded-sm'>FAQs</div></Link>
                </div>
                </span>
              </div>
            </div>
          
          </div>
    </div>
   
    </>
  )
}

export default Head
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='py-5'>
      <div className='py-3 sm:px-[100px] px-[20px] flex justify-between items-center flex-wrap lg:flex-nowrap lg:gap-3'>
        <div className='bg-neutral-700 w-[99%] h-fit lg:w-[48%] p-3 rounded-md mb-2 flex px-5'>
          <div className='w-[48%] sm:text-xs'>
          <p className='font-bold text-lg text-orange-500'>Working Timetable</p> 
          <p className='font-bold mt-3 text-sm'>Inquaries</p>
          <p className='text-orange-500'>Visit FAQs Page</p>
          <p className='font-bold mt-3 text-sm'>Working Hours</p>
          <span className='text-orange-500'>
            <p className='my-1'>Mon: <span className='text-white '> 8AM - 9PM</span></p>
            <p className='my-1'>Tues: <span className='text-white '>8AM - 9PM</span></p>
            <p className='my-1'>Wed: <span className='text-white '>8AM - 9PM</span> </p>
            <p className='my-1'> Thurs: <span className='text-white '> 8AM - 9PM</span></p>
            <p className='my-1'>Fri: <span className='text-white '> 8AM - 9PM</span></p>
            <p className='my-1'>Sat: <span className='text-white '> 8AM - 1PM</span></p>
            <p className='my-1'>Sun: <span className='text-white '> 8AM - 1PM</span></p>
          </span>
          <p className='font-bold text-orange-500 mt-3'>Now Closed - Opens at 8AM</p>
          </div>
          <div className='w-[48%] sm:text-xs'>
          <p className='font-bold text-lg text-orange-500'>Quick Links</p>
            <Link to="/Todays"><div className='hover:text-orange-500 text-start py-2 border-orange-500 w-[100px]'>Today's Specials</div></Link>
            <Link to="/Menu"><div className='hover:text-orange-500 text-start py-2 border-orange-500 w-[100px]'>Today's Menu</div></Link>
            <Link to="/About"><div className='hover:text-orange-500 text-start py-2 border-orange-500 w-[100px]'>About us</div></Link>
            <Link to="/Testimonials"><div className='hover:text-orange-500 text-start py-2 border-orange-500 w-1080px]'>Testimonials</div></Link>
            <Link to="/FAQs"><div className='hover:text-orange-500 text-start py-2 border-orange-500 w-[100px]'>FAQs</div></Link>
          </div>
        </div>
        <div className='bg-neutral-700 w-[99%] h-fit lg:w-[48%] p-3 rounded-md mb-2 '>
        <p className='font-bold my-2'>Socials links</p>      
            <div className='flex justify-between'>
            <div className='bg-neutral-800 h-10 text-[9px] px-1 w-[49%] my-1 rounded-full font-bold flex gap-3 items-center'>
                <div className='bg-neutral-700 h-8 w-8 rounded-full flex justify-center items-center'>
                  <img src=".\src\assets\icons\Facebook.png" width="19" alt="" />
                </div>
                <span className='text-blue-500'>Facebook: @ShiFuFooders</span>
              </div>
              <div className='bg-neutral-800 h-10 text-[9px] px-1 w-[49%] my-1 rounded-full font-bold flex gap-3 items-center'>
                <div className='bg-neutral-700 h-8 w-8 rounded-full flex justify-center items-center'>
                  <img src=".\src\assets\icons\instagram.png" width="18" alt=""/>
                </div>
                <span className='text-purple-700'>Instagram: @ShiFu_Fooders</span>
              </div>
            </div>
              <div className='flex justify-between'>
            <div className='bg-neutral-800 h-10 text-[9px] px-1 w-[49%] my-1 rounded-full font-bold flex gap-3 items-center'>
                <div className='bg-neutral-700 h-8 w-8 rounded-full flex justify-center items-center'>
                  <img src=".\src\assets\icons\whatsapp.png" width="18" alt="" />
                </div>
                <span className='text-green-600'>+260 975986004/+260 760932304</span>
              </div>
              <div className='bg-neutral-800 h-10 text-[9px] px-1 w-[49%] my-1 rounded-full font-bold flex gap-3 items-center'>
                <div className='bg-neutral-700 h-8 w-8 rounded-full flex justify-center items-center'>
                  <img src=".\src\assets\icons\youtube.png" width="18" alt=""  />
                </div>
                <span className='text-red-700'>Youtube: @ShiFu Fooders</span>
              </div>
            </div>
            
          <p className='font-bold my-2'>Connect with us</p>      
          <div className='flex justify-between'>
            <div className='bg-neutral-700 border-neutral-600 border-[1px] h-10 text-[9px] pr-2 pl-1 w-[49%] my-1 rounded-full font-bold flex gap-3 items-center shadow-sm shadow-neutral-800'>
                <div className='bg-neutral-800 h-8 w-8 rounded-full flex justify-center items-center'>
                <img src=".\src\assets\icons\website.png" width="22" alt="" className='brightness-[0] invert-[1]'  />
                </div>
                <span className='text-white'>http/www.ShiFuFooders.com</span>
              </div>
              <div className='bg-neutral-700 border-neutral-600 border-[1px] h-10 text-[9px] pr-2 pl-1 w-[49%] my-1 rounded-full font-bold flex gap-3 items-center shadow-sm shadow-neutral-800'>
                <div className='bg-neutral-800 h-8 w-8 rounded-full flex justify-center items-center'>
                  <img src=".\src\assets\icons\call-icon.png" width="18" alt="" className='brightness-[0] invert-[1]' />
                </div>
                <span className='text-white'>+260 975986004/+260 760932304</span>
              </div>
            </div>
              <div className='flex justify-between'>
            <div className='bg-neutral-700 border-neutral-600 border-[1px] h-10 text-[9px] pr-2 pl-1 w-[49%] my-1 rounded-full font-bold flex gap-3 items-center shadow-sm shadow-neutral-800'>
                <div className='bg-neutral-800 h-8 w-8 rounded-full flex justify-center items-center'>
                <img src=".\src\assets\icons\mail-inbox-app.png" width="20" className='brightness-[0] invert-[1]'  alt="" />
                </div>
                <span className='text-white'>@shifufooders@gmail.com</span>
              </div>
              <div className='bg-neutral-700 border-neutral-600 border-[1px] h-10 text-[9px] pr-2 pl-1 w-[49%] my-1 rounded-full font-bold flex gap-3 items-center shadow-sm shadow-neutral-800'>
                <div className='bg-neutral-800 h-8 w-8 rounded-full flex justify-center items-center'>
                <img src=".\src\assets\icons\home.png" width="20" alt="" className='brightness-[0] invert-[1]' />
                </div>
                <span className='text-white'>Plot No.50004, Along Great East Road</span>
              </div>
            </div>
        </div>
      </div>
      <div className='bg-neutral-700 w-full h-[1px]'></div>
      <div className='pt-3 px-[100px] flex justify-between text-xs text-orange-500'> 
        <span>@ShfuFooders2025</span>
      <span>@All rights reserved</span></div>
    </div>
  )
}

export default Footer
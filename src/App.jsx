import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Head from './Compo/Head'
import Recom from './Compo/Recom'
import Loca from './Compo/Loca'
import Todays from './Compo/Contents/Todays'
import Menu from './Compo/Contents/Menu'
import Testimonials from './Compo/Contents/Testimonials'
import FAQs from './Compo/Contents/FAQs'
import About from './Compo/Contents/About'
import Footer from './Compo/Footer'
import Navi from './Compo/Navi'
import DashBoard from './Compo/DashBoard'


const App = () => {
  return (
    <  >    
    <div className='bg-neutral-800 h-fit text-[10px] text-white sm:text-sm'>
    <BrowserRouter>
    <Navi/>
    <Head/>
    <Routes>
      
      <Route index element={<Todays/>}></Route>
      <Route path='/Todays' element={<Todays/>}></Route>
      <Route path='/Menu' element={<Menu/>}></Route>
      <Route path='/FAQs' element={<FAQs/>}></Route>
      <Route path='/Testimonials' element={<Testimonials/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/DashBoard' element={<DashBoard/>}></Route>
    </Routes>
    <Recom/>
    <Loca/>
    <Footer/>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
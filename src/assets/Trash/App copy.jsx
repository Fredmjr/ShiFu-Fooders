import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navibar from './Components/NaviBar'
import Home from './Components/Home'
import About from './Components/About'
import Tastimonials from './Components/Tastimonials'
import Footer from './Components/Footer'
import Menu from './Components/Menu'
import FAQs from './Components/FAQs'
import Todays from './Components/Todays'
import DskOnly from './Components/DskOnly'



const App = () => {
  return (
    <  >
     <div className='bg-neutral-800 h-full text-white text-sm absolute z-50'><DskOnly/></div>       
    <div className='bg-neutral-800 h-full text-white text-sm relative'>
    
    <BrowserRouter>

    <Navibar/>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Todays' element={<Todays/>}></Route>
      <Route path='/Menu' element={<Menu/>}></Route>
      <Route path='/FAQs' element={<FAQs/>}></Route>
      <Route path='/Tastimonials' element={<Tastimonials/>}></Route>
      <Route path='/About' element={<About/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
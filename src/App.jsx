import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path='/' element ={<Home/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='/service' element={<Service/>}/>

      </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App

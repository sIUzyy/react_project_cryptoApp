import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from '../components/Footer'
import About from '../pages/About'
import Disclaimer from '../pages/Disclaimer'
import Navbar from '../components/Navbar'
import Main from '../pages/Main'
import CryptoInfo from '../pages/Crypto'

const MainRoutes = () => {
  return (
    <>
        <Router>
          <Navbar/>
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/crypto' element={<CryptoInfo/>}>
                <Route path=':id' element={<CryptoInfo/>} />
                  
                </Route>                  
                <Route path='/disclaimer' element={<Disclaimer/>} />
                <Route path='/about' element={<About/>} />
            </Routes>

            <Footer/>
            
        </Router>
    </>
  )
}

export default MainRoutes
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Restaurant from './pages/Restaurant/Restaurant.jsx'
import ScrollToTop from './assets/utils/ScrollToTop'
// import Location from './components/Location/Location'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <ScrollToTop />
         <Header />
         <Routes>
            {/* <Route path="*" element={<NotFound />}></Route> */}
            <Route index element={<Home />}></Route>
            {/* <Route path="/about" element={<About />}></Route> */}
            <Route path="/restaurant/:id" element={<Restaurant />}></Route>
         </Routes>
         <Footer />
      </BrowserRouter>
   </React.StrictMode>
)

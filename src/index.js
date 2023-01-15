import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {
   BrowserRouter,
   Routes,
   Route,
   Navigate,
   HashRouter,
} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Restaurant from './pages/Restaurant/Restaurant.jsx'
import ScrollToTop from './assets/utils/ScrollToTop'
import NotFound from './pages/404/404.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <ScrollToTop />
         <Header />
         <Routes>
            <Route path="*" element={<Navigate to="/404" />}></Route>
            <Route index element={<Home />}></Route>
            <Route path="/restaurant/:id" element={<Restaurant />}></Route>
            <Route path="/404" element={<NotFound />}></Route>
         </Routes>
         <Footer />
      </BrowserRouter>

      {/* routes gh page
      <HashRouter>
         <ScrollToTop />
         <Header />
         <Routes>
            <Route path="*" element={<Navigate to="/404" />}></Route>
            <Route index element={<Home />}></Route>
            <Route path="/restaurant/:id" element={<Restaurant />}></Route>
            <Route path="/404" element={<NotFound />}></Route>
         </Routes>
         <Footer />
      </HashRouter> */}
   </React.StrictMode>
)

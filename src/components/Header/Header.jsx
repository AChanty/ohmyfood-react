import './Header.css'
import logo from '../../assets/logos/ohmyfood@2x.svg'
import { NavLink, useLocation, useParams } from 'react-router-dom'

function Header() {
   const { pathname } = useLocation()
   const { id } = useParams() // utilise l'id de l'url

   console.log(`/restaurants/${id}`)
   console.log(pathname)

   //    if (pathname === id) {
   if (pathname === '/') {
      return (
         <header className="header">
            <div className="header__logo-wrapper">
               <div className="header__restaurant-wrapper">
                  <NavLink to="/">
                     <img
                        className="header__logo"
                        src={logo}
                        alt="ohmyfood logo"
                     />
                  </NavLink>
               </div>
            </div>
         </header>
      )
   } else {
      return (
         <header className="header">
            <div className="header__logo-wrapper">
               <div className="header__restaurant-wrapper">
                  <NavLink to="/">
                     <i className="fa-solid fa-arrow-left"></i>
                  </NavLink>
                  <NavLink to="/">
                     <img
                        className="header__logo"
                        src={logo}
                        alt="ohmyfood logo"
                     />
                  </NavLink>
               </div>
            </div>
         </header>
      )
   }
}

export default Header

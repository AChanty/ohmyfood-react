import './Header.css'
import logo from '../../assets/logos/ohmyfood@2x.svg'
import { NavLink, useLocation, useParams } from 'react-router-dom'

function Header() {
   const { pathname } = useLocation()
   //    const { id } = useParams() // utilise l'id de l'url

   //    if (pathname === id) {
   if (pathname === '/ohmyfood-react' || pathname === '/') {
      return (
         <header className="header">
            <div className="header__logo-wrapper">
               <div className="header__restaurant-wrapper">
                  <NavLink to="/ohmyfood-react">
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
                  <NavLink to="/ohmyfood-react">
                     <i className="fa-solid fa-arrow-left"></i>
                  </NavLink>
                  <NavLink to="/ohmyfood-react">
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

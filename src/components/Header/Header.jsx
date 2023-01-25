import './Header.css'
import logo from '../../assets/logos/ohmyfood@2x.svg'
import { Link, useLocation } from 'react-router-dom'

function Header() {
   const { pathname } = useLocation()
   const isRestaurantPage = pathname.startsWith('/restaurant')

   return (
      <header className="header">
         <div className="header__logo-wrapper">
            <div className="header__restaurant-wrapper">
               {isRestaurantPage && ( // affiche la flèche de retour si l'url commence par /restaurant
                  <Link to="/">
                     <i className="fa-solid fa-arrow-left" />
                  </Link>
               )}
               <Link to="/">
                  <img
                     className="header__logo"
                     src={logo}
                     alt="ohmyfood logo"
                  />
               </Link>
            </div>
         </div>
      </header>
   )
}

export default Header

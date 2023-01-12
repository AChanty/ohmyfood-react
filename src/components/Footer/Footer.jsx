import './Footer.css'
import logo from '../../assets/logos/ohmyfood@2x.svg'
import { NavLink } from 'react-router-dom'

function Footer() {
   return (
      <footer className="footer">
         <div className="footer__content">
            <img src={logo} alt="logo ohmyfood" />
            <ul>
               <li>
                  <NavLink to="/">
                     <i className="fa-solid fa-utensils"></i>Proposer un
                     restaurant
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/">
                     <i className="fa-solid fa-handshake-angle"></i>Devenir
                     partenaire
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/">Mentions légales </NavLink>
               </li>
               <li>
                  <NavLink to="/">Contact </NavLink>
               </li>
            </ul>
         </div>
      </footer>
   )
}

export default Footer

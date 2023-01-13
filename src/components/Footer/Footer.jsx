import './Footer.css'
import logo from '../../assets/logos/ohmyfood@2x.svg'
import { NavLink } from 'react-router-dom'

const links = [
   {
      icon: 'fa-utensils',
      text: 'Proposer un restaurant',
      path: '/',
   },
   {
      icon: 'fa-handshake-angle',
      text: 'Devenir partenaire',
      path: '/',
   },
   {
      text: 'Mentions légales',
      path: '/',
   },
   {
      text: 'Contact',
      path: '/',
   },
]

function Footer() {
   return (
      <footer className="footer">
         <div className="footer__content">
            <img src={logo} alt="logo ohmyfood" />
            <ul>
               {/* parcourt le tableau "links" pour créer un élément pour chaque entrée présente */}
               {links.map((link, index) => (
                  <li key={index}>
                     <NavLink to={link.path}>
                        {link.icon && ( // injecte ce code si l'objet du tableau contient une valeur "icon"
                           <i className={`fa-solid ${link.icon}`} />
                        )}
                        {link.text}
                     </NavLink>
                  </li>
               ))}
            </ul>
         </div>
      </footer>
   )
}

export default Footer

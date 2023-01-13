import { Link } from 'react-router-dom'
import './Button.css'

function Button({ text, link, anchor }) {
   const handleClick = () => {
      if (anchor) {
         // cette condition rend la valeur "anchor" optionnelle, en vérifiant si la valeur est renseignée avant de procéder à la méthode scrollIntoView() si c'est le cas
         const element = document.getElementById(anchor)
         element.scrollIntoView()
      }
   }
   return (
      <div>
         <Link to={link} className="general-button" onClick={handleClick}>
            {text}
         </Link>
      </div>
   )
}

export default Button

import { Link } from 'react-router-dom'
import './404.css'

function NotFound() {
   return (
      <div className="error_container">
         <div className="error_message-container">
            <h1 className="error_title">404</h1>
            <div className="error_text-container">
               <p className="error_text">
                  Oups! La page que vous demandez n'existe pas.
               </p>
            </div>
         </div>
         <div className="error_back-container">
            <p className="error_back">
               <Link to="/" className="error_back-link">
                  Retourner sur la page d'accueil
               </Link>
            </p>
         </div>
      </div>
   )
}

export default NotFound

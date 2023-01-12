import './Banner.css'
// import { Link } from 'react-router-dom'

function Banner() {
   return (
      <div className="banner">
         <div className="banner__cta">
            <h1 className="regular-title">
               Réservez le menu qui vous convient
            </h1>
            <p>
               Découvrez des restaurants d'exception, séléctionnés par nos
               soins.
            </p>
            <a className="banner__cta__button" href="#restaurants">
               Explorer nos restaurants
            </a>
         </div>
      </div>
   )
}

export default Banner

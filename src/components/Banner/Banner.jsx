import './Banner.css'
// import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'

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
            <Button text={'Explorer nos restaurants'} anchor={'restaurants'} />
         </div>
      </div>
   )
}

export default Banner

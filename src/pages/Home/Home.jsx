import './Home.css'
import Card from '../../components/Card/Card'
import Banner from '../../components/Banner/Banner'
// import Loader from '../../components/Loader/Loader'
import Fonctionnement from '../../components/Fonctionnement/Fonctionnement'
import { Helmet } from 'react-helmet'

function Home() {
   return (
      <div>
         {/* <Loader /> */}
         <Helmet>
            <title>Accueil - Ohmyfood</title>
         </Helmet>
         <div>
            <Banner />
            <Fonctionnement />
            <div className="restaurants-wrapper">
               <section id="restaurants" className="restaurants">
                  <h2 className="regular-title">Restaurants</h2>
                  <div className="restaurants__item-wrapper">
                     <Card />
                  </div>
               </section>
            </div>
         </div>
      </div>
   )
}

export default Home

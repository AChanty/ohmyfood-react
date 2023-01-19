// import './Home.css'
// import Card from '../../components/Card/Card'
// import Banner from '../../components/Banner/Banner'
// // import Loader from '../../components/Loader/Loader'
// import Fonctionnement from '../../components/Fonctionnement/Fonctionnement'
// import { Helmet } from 'react-helmet'
// import Restaurants from './../../assets/datas/restaurants.json'

// function Home() {
//    return (
//       <div>
//          {/* <Loader /> */}
//          <Helmet>
//             <title>Accueil - Ohmyfood</title>
//          </Helmet>
//          <div>
//             <Banner />
//             <Fonctionnement />
//             <div className="restaurants-wrapper">
//                <section id="restaurants" className="restaurants">
//                   <h2 className="regular-title">Restaurants</h2>
//                   <div className="restaurants__item-wrapper">
//                      <div className="cards">
//                         {Restaurants.map(
//                            // créé un div.card-item pour chaque objet disponible dans restaurants.json
//                            (restaurant, index) => (
//                               <Card
//                                  index={index}
//                                  restaurant={restaurant}
//                                  key={index}
//                               />
//                            )
//                         )}
//                      </div>
//                   </div>
//                </section>
//             </div>
//          </div>
//       </div>
//    )
// }

// export default Home

import './Home.css'
import Card from '../../components/Card/Card'
import Banner from '../../components/Banner/Banner'
// import Loader from '../../components/Loader/Loader'
import Fonctionnement from '../../components/Fonctionnement/Fonctionnement'
import { Helmet } from 'react-helmet'
// import Restaurants from './../../assets/datas/restaurants.json'
import { useState, useEffect } from 'react'
import Loading from '../../components/Loading/Loading'

function Home() {
   const [isDataLoading, setDataLoading] = useState(false)
   const [restaurantData, setRestaurantData] = useState()

   useEffect(() => {
      setDataLoading(true) // active l'état de barre de chargement
      fetch(`${process.env.PUBLIC_URL}/restaurants.json`)
         .then((response) => response.json())
         .then((data) => {
            setRestaurantData(data)
            setDataLoading(false) // désactive l'état de barre de chargement
         })
         .catch((error) => console.log(error))
   }, [])

   if (!restaurantData) {
      return <Loading />
   }

   return (
      <div>
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
                     <div className="cards">
                        {isDataLoading ? ( // affiche la barre de chargement pendant le fetching
                           <Loading />
                        ) : (
                           <>
                              {restaurantData.map(
                                 // créé un div.card-item pour chaque objet disponible dans restaurants.json
                                 (restaurant, index) => (
                                    <Card
                                       index={index}
                                       restaurant={restaurant}
                                       key={index}
                                    />
                                 )
                              )}
                           </>
                        )}
                     </div>
                  </div>
               </section>
            </div>
         </div>
      </div>
   )
}

export default Home

import './Restaurant.css'
import Restaurants from './../../assets/datas/restaurants.json'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import Location from '../../components/Location/Location'
import BackgroundRestaurant from '../../components/BackgroundRestaurant/BackgroundRestaurant'
import PlatesList from '../../components/PlatesList/PlatesList'
import Button from '../../components/Button/Button'
import Popup from '../../components/Popup/Popup'
import { Helmet } from 'react-helmet'
import { useState } from 'react'

function Restaurant() {
   const { id } = useParams() // utilise l'id de l'url
   const Restaurant = Restaurants.find((element) => {
      // cherche l'id de l'url dans Restaurants.json pour faire correspondre la page au Restaurant
      return element.id === id
   })

   const { pathname } = useLocation()

   const [showPopup, setShowPopup] = useState(true)

   // redirige vers la page d'erreur 404 si l'id de l'url ne correspond à aucun id existant
   if (!Restaurant) {
      return <Navigate to="/404" />
   }

   const { name, location, menu, background } = Restaurant
   const { entrées, plats, desserts } = menu

   return (
      <div className="main-wrapper">
         <Helmet>
            <title>{name}</title>
         </Helmet>
         <Location location={location} />
         <BackgroundRestaurant source={background} />
         <div
            className={`restaurant-page-wrapper ${showPopup ? 'blur' : ''}`} // ajoute une classe blur si showPopup est actif
            onClick={() => setShowPopup(false)} // retire le popup lors du clic en dehors de celui-ci
         >
            <section className="restaurant-page">
               <div className="restaurant-page__restaurant-name">
                  <h1>{name}</h1>
                  <i className="fa-regular fa-heart" />
               </div>
               <div className="restaurant-page__flex">
                  <div className="restaurant-page__menus-wrapper">
                     <div className="restaurant-page__label-wrapper">
                        <p className="restaurant-page__label">Entrées</p>
                        <span></span>
                     </div>

                     <div>
                        {/* <img
                           src={`${process.env.PUBLIC_URL}/images/a-la-francaise.jpg`}
                           alt=""
                        /> */}
                        <PlatesList categorie={entrées} />
                     </div>
                  </div>

                  <div className="restaurant-page__menus-wrapper">
                     <div className="restaurant-page__label-wrapper">
                        <p className="restaurant-page__label">Plats</p>
                        <span></span>
                     </div>

                     <div>
                        <PlatesList categorie={plats} />
                     </div>
                  </div>
                  <div className="restaurant-page__menus-wrapper">
                     <div className="restaurant-page__label-wrapper">
                        <p className="restaurant-page__label">Desserts</p>
                        <span></span>
                     </div>
                     <div>
                        <PlatesList categorie={desserts} />
                     </div>
                  </div>
               </div>
               <div className="restaurant-page__button-wrapper">
                  <Button
                     text={'Commander'}
                     link={pathname}
                     onClick={() => setShowPopup(true)}
                  />
               </div>
            </section>
         </div>
         {showPopup ? (
            <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
         ) : null}
      </div>
   )
}

export default Restaurant

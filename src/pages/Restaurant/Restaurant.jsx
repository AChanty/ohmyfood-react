import './Restaurant.css'
import Restaurants from './../../assets/datas/restaurants.json'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import Location from '../../components/Location/Location'
import { Link } from 'react-router-dom'
import BackgroundRestaurant from '../../components/BackgroundRestaurant/BackgroundRestaurant'
// import PlatesList from '../../components/PlatesList/PlatesList'

import { Helmet } from 'react-helmet'

function PlatesList({ categorie }) {
   return (
      <div>
         {categorie.map((categorie, index) => {
            // créé un template pour chaque élément de 'categorie'
            return (
               <div className="restaurant-page__plate" key={index}>
                  <div className="restaurant-page__plate-description">
                     <div className="restaurant-page__plate-description-text">
                        <p className="restaurant-page__plate-description-text__plate-name">
                           {categorie.plate}
                        </p>
                        <p className="restaurant-page__plate-description-text__plate-infos">
                           {categorie.description}
                        </p>
                     </div>
                     <div className="restaurant-page__plate-price-wrapper">
                        <p className="restaurant-page__plate-price">
                           {categorie.price}
                        </p>
                     </div>
                  </div>
                  <div className="restaurant-page__check-wrapper">
                     <i className="fas fa-check"></i>
                  </div>
               </div>
            )
         })}
      </div>
   )
}

function Restaurant() {
   const { id } = useParams() // utilise l'id de l'url
   const Restaurant = Restaurants.find((element) => {
      // cherche l'id de l'url dans Restaurants.json pour faire correspondre la page au Restaurant
      return element.id === id
   })

   const { pathname } = useLocation()

   if (!Restaurant) {
      return <Navigate to="/404" />
   }

   // redirige vers la page d'erreur 404 si l'id de l'url ne correspond à aucun id existant
   if (!Restaurant) {
      return <Navigate to="/" />
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
         <div className="restaurant-page-wrapper">
            <section className="restaurant-page">
               <div className="restaurant-page__restaurant-name">
                  <h1>{name}</h1>
                  <i className="fa-regular fa-heart"></i>
               </div>
               <div className="restaurant-page__flex">
                  <div className="restaurant-page__menus-wrapper">
                     <div className="restaurant-page__label-wrapper">
                        <p className="restaurant-page__label">Entrées</p>
                        <span></span>
                     </div>

                     <div>
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
                  <Link
                     to={pathname}
                     className="restaurant-page__button-wrapper__button"
                  >
                     Commander
                  </Link>
               </div>
            </section>
         </div>
      </div>
   )
}

export default Restaurant

import './Restaurant.css'
import { Navigate, useLocation, useParams, Link } from 'react-router-dom'
import Location from '../../components/Location/Location'
import BackgroundRestaurant from '../../components/BackgroundRestaurant/BackgroundRestaurant'
import PlatesList from '../../components/PlatesList/PlatesList'
import Button from '../../components/Button/Button'
import Popup from '../../components/Popup/Popup'
import { useState, useEffect } from 'react'
import Loading from '../../components/Loading/Loading'

function IsNew({ restaurant }) {
   if (restaurant.nouveau) {
      return <span className="restaurant-page_new">Nouveau</span>
   }
}

function Restaurant() {
   const [isDataLoading, setDataLoading] = useState(false) // statut de la barre de chargement
   const [restaurantData, setRestaurantData] = useState() // statut de la réponse du fetch
   const [notFound, setNotFound] = useState(false)

   const [showPopup, setShowPopup] = useState(false)

   const { id } = useParams()

   useEffect(() => {
      setDataLoading(true) // active l'état de barre de chargement
      fetch(`${process.env.PUBLIC_URL}/restaurants.json`)
         .then((response) => response.json())
         .then((data) => {
            const res = data.find((element) => element.id === id)
            if (res) {
               // si le fetch résoud le data.find id, transmet la réponse à restaurantData
               setRestaurantData(res)
            } else {
               // si le fetch ne résoud pas le data.find id et ne trouve pas d'id correspondant, passe notFound en true
               setNotFound(true)
            }
            setDataLoading(false) // désactive l'état de barre de chargement
         })
         .catch((error) => console.log(error))
   }, [id])

   const { pathname } = useLocation()

   if (notFound) {
      // si l'id n'est pas trouvé, redirige vers la page 404
      return <Navigate to="/404" />
   }
   if (!restaurantData) {
      // affiche la barre de chargement tant que restaurantData n'a pas reçu les données
      return <Loading />
   }

   const { name, location, menu, background } = restaurantData
   const { entrées, plats, desserts } = menu

   return (
      <div className="main-wrapper">
         {isDataLoading ? ( // affiche la barre de chargement pendant le fetching
            <Loading />
         ) : (
            <>
               <Location location={location} />
               <BackgroundRestaurant source={background} />
               <div
                  className={`restaurant-page-wrapper
                  ${showPopup ? 'test' : ''}`} // ajoute une classe blur si showPopup est actif
                  onClick={() => setShowPopup(false)} // retire le popup lors du clic en dehors de celui-ci
               >
                  <IsNew restaurant={restaurantData} />
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
                           // link={`/restaurant/${id}/order`}
                           // onClick={openForm()}
                        />
                     </div>
                  </section>
               </div>
               {showPopup ? <Popup setShowPopup={setShowPopup} /> : null}
            </>
         )}
      </div>
   )
}

export default Restaurant

import './Card.css'
import Restaurants from './../../assets/datas/restaurants.json'
import { Link } from 'react-router-dom'

function IsNew({ restaurant }) {
   if (restaurant.nouveau) {
      return <span className="cards_new">Nouveau</span>
   }
}

function Card() {
   return (
      <div className="cards">
         {Restaurants.map(
            // créé un div.card-item pour chaque objet disponible dans restaurants.json
            (restaurant, index) => (
               <div className="cards__item" key={index}>
                  <Link
                     to={`restaurant/${restaurant.id}`} // le lien dirige vers restaurants/:restaurants.id
                  >
                     <div className="cards__item-img_holder">
                        <img src={restaurant.cover} alt={restaurant.name} />
                     </div>
                     <div className="cards__item__flex">
                        <div className="cards__item__name">
                           <h3 className="regular-title">{restaurant.name}</h3>
                           <p>{restaurant.location}</p>
                        </div>
                     </div>
                  </Link>
                  <div className="cards__item__icon">
                     <i className="fa-regular fa-heart" />
                  </div>
                  <IsNew restaurant={restaurant} />
               </div>
            )
         )}
      </div>
   )
}

export default Card

import './New.css'
import Restaurants from './../../assets/datas/restaurants.json'

function New() {
   if (Restaurants.nouveau) {
      console.log('oui')
   } else {
      console.log('non')
   }

   return (
      <div className="new">
         {Restaurants.map(
            (
               restaurant // créé un div.card-item pour chaque objet disponible dans logement.json
            ) => (
               <div className="cards__item" key={restaurant.id}>
                  <div className="cards__item__flex">
                     <div className="cards__item__name">
                        <h3 className="regular-title">{restaurant.nouveau}</h3>
                     </div>
                  </div>
               </div>
            )
         )}
      </div>
   )
}

export default New

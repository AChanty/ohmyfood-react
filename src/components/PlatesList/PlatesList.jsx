import './PlatesList.css'

function PlatesList({ categorie }) {
   return (
      <div>
         {Object.entries({ categorie }).map(({ categorie }, index) => {
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

export default PlatesList

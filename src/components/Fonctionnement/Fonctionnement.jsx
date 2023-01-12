import './Fonctionnement.css'

function Fonctionnement() {
   return (
      <div className="fonctionnement-wrapper">
         <section className="fonctionnement">
            <h2 className="regular-title">Fonctionnement</h2>
            <div className="fonctionnement__steps">
               <div className="fonctionnement__steps__item">
                  <i className="fa-solid fa-mobile-screen-button"></i>Choisissez
                  un restaurant
               </div>
               <div className="fonctionnement__steps__item">
                  <i className="fa-solid fa-list"></i>Composez votre menu
               </div>
               <div className="fonctionnement__steps__item">
                  <i className="fa-solid fa-store"></i>Dégustez au restaurant
               </div>
            </div>
         </section>
      </div>
   )
}

export default Fonctionnement

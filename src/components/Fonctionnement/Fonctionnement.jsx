import './Fonctionnement.css'

const steps = [
   {
      icon: 'fa-mobile-screen-button',
      text: 'Choisissez un restaurant',
   },
   {
      icon: 'fa-list',
      text: 'Composez votre menu',
   },
   {
      icon: 'fa-store',
      text: 'Dégustez au restaurant',
   },
]

function Fonctionnement() {
   return (
      <div className="fonctionnement-wrapper">
         <section className="fonctionnement">
            <h2 className="regular-title">Fonctionnement</h2>
            <div className="fonctionnement__steps">
               {/* parcourt le tableau "steps" pour créer un élément pour chaque entrée présente */}
               {steps.map((step, index) => (
                  <div key={index} className="fonctionnement__steps__item">
                     <i className={`fa-solid ${step.icon}`}></i>
                     {step.text}
                     <div className="fonctionnement__steps__item-counter">
                        {index + 1}
                     </div>
                  </div>
               ))}
            </div>
         </section>
      </div>
   )
}

export default Fonctionnement

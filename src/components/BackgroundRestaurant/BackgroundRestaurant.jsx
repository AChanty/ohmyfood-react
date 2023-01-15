import './BackgroundRestaurant.css'

function BackgroundRestaurant({ source }) {
   return (
      <div
         className="restaurant__background"
         style={{
            // backgroundImage: `url(${source})`,
            backgroundImage: `url(${source}`,
         }}
      ></div>
   )
}

export default BackgroundRestaurant

import './Location.css'

function Location({ location }) {
   return (
      <div className="location">
         <p className="location__area">
            <i className="fa-solid fa-location-dot" />
            {location}
         </p>
      </div>
   )
}

export default Location

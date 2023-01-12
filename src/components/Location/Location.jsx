import './Location.css'
// import { NavLink } from 'react-router-dom'

function Location({ location }) {
   return (
      //   <div className="header__area-wrapper">
      <div className="location">
         {/* <p className="header__area"> */}
         <p className="location__area">
            <i className="fa-solid fa-location-dot"></i>
            {location}
            {/* Paris, Belleville */}
         </p>
      </div>
   )
}

export default Location

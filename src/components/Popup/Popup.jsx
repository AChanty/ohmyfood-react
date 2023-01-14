import './Popup.css'
import { useState, useEffect } from 'react'
import Form from '../../components/Form/Form'

function Popup({ showPopup, setShowPopup }) {
   const [animating, setAnimating] = useState(false)

   useEffect(() => {
      if (!showPopup) {
         setAnimating(true)
         setTimeout(() => {
            setAnimating(false)
         }, 500)
      }
   }, [showPopup])

   return showPopup ? (
      //   <div className="popup_container fadeIn {`!showPopup ?`}">
      <div className={`popup_container fadeIn ${animating ? 'fadeOut' : ''}`}>
         <div className="popup_content">
            <Form />
            <span
               className="popup_close-button"
               onClick={() => setShowPopup(false)}
            >
               X
            </span>
         </div>
      </div>
   ) : null
}

export default Popup

import './Popup.css'
import { useState } from 'react'
import Form from '../../components/Form/Form'

function Popup({ showPopup, setShowPopup }) {
   //    const [showPopup, setShowPopup] = useState(false)
   return showPopup ? (
      <div className="popup_container">
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
   ) : (
      <p>false</p>
   )
}

export default Popup

// function Collapse({ headerName, content }) {
//    const [isOpen, isClosed] = useState(false)

//    return isOpen ? ( // si le composant est ouvert, affiche le contenu qui contient les informations relatives à l'onglet ouvert
//       <div className="collapse_item">
//          <div className="collapse_head" onClick={() => isClosed(false)}>
//             <h3>{headerName}</h3>
//          </div>
//          <div className="collapse_content">{content}</div>
//       </div>
//    ) : (
//       <div className="collapse_item">
//          <div className="collapse_head" onClick={() => isClosed(true)}>
//             <h3>{headerName}</h3>
//          </div>

//          {/* change la classe de collapse_content pour pouvoir gérer les animations */}
//          <div className="collapse_content-closed"></div>
//       </div>
//    )
// }

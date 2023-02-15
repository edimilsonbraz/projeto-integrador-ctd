import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

import './styles.css'

export function Footer() {
  return (
    <div className="containerFooter">
      <p>©2021 Digital Booking</p>
      <div className="contentIcons">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faLinkedinIn} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  )
}

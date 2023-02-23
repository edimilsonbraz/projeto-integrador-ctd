import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faWifi,
  faSwimmer
} from '@fortawesome/free-solid-svg-icons'

import './style.css'

export function CardInline({img, title, star, numberAvaliation, textAvaliation, description}) {
  return (
    <>
      <div className="containerCardInline">
        <div className="contentCard">
          <div className="contentImage">
            <img src={img} alt="" />
          </div>
          <div className="contentDescription">
            <div className="contentAvaliation">
              <div className="stars">
                <p>Hotel</p>
                <span>{star}</span>
                <h3>{title}</h3>
              </div>
              <div className="avaliation">
                <div>
                  <span>{numberAvaliation}</span>
                </div>
                <p>{textAvaliation}</p>
              </div>
            </div>

            <div className="contentIcons">
              <div>
                <FontAwesomeIcon icon={faLocationDot} />
                <p>A 900 metros da praia</p>
                <FontAwesomeIcon icon={faSwimmer} />
                <FontAwesomeIcon icon={faWifi} />
              </div>
              <div></div>
            </div>
            <div className="contentText">
              <p>{description}</p>
            </div>
            <div className="button">
              <button>Ver mais</button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="containerCardInline">
        <div className="contentCard">
          <div className="contentImage">
            <img
              src="https://images.trvl-media.com/lodging/1000000/80000/77900/77873/36834f1b.jpg?impolicy=resizecrop&rw=598&ra=fit"
              alt=""
            />
          </div>
          <div className="contentDescription">
            <div className="contentAvaliation">
              <div className="stars">
                <p>Hotel</p>
                <span>⭐⭐⭐⭐⭐</span>
                <h3>Faial Prime Suíte</h3>
              </div>
              <div className="avaliation">
                <div>
                  <span>8</span>
                </div>
                <p>Muito bom</p>
              </div>
            </div>

            <div className="contentIcons">
              <div>
                <FontAwesomeIcon icon={faLocationDot} />
                <p>A 900 metros da praia</p>
                <FontAwesomeIcon icon={faSwimmer} />
                <FontAwesomeIcon icon={faWifi} />
              </div>
              <div></div>
            </div>
            <div className="contentText">
              <p>
                No coração de Faial Prime Suíte, desfrute de uma pousada
                inspirada nas paixões de Florianópolis.
              </p>
            </div>
            <div className="button">
              <button>Ver mais</button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

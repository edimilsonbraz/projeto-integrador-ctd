import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

import { ContainerCategory } from "../../components/ContainerCategory";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faLocationDot,
  faCalendarCheck,
  faStar
} from '@fortawesome/free-solid-svg-icons'

import './style.css'
import { CardInline } from "../../components/CardInline";

export function Home() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  function onChange(dates) {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    console.log("Entrada: " + start + " => " + "Saida: " + end)
  };

  return (
    <>
      <div className="containerBuscador">
        <h1>Buscar ofertas em hotéis, casas e muito mais</h1>

        <div className="contentInputs">
          <div className="inputs">
            <label htmlFor="destino">
              <FontAwesomeIcon icon={faLocationDot} />
            </label>
            <input type="text" id="destino" placeholder="Onde vamos?" />
          </div>

          <div className="inputs">
            {/* <label htmlFor="check-in"> */}
              {/* <FontAwesomeIcon icon={faCalendarCheck} /> */}
             

           
                {/* <DatePicker
                selectsRange={true}
                className="input"
                placeholderText="Check in - Check out"
               
              /> */}
          </div>

          <button>Buscar</button>
        </div>
      </div>
      

      <ContainerCategory />

      <section className="containerRecomendacao">
        <div className="contentRecomendacao">
          <h2>Recomendações</h2>
          
          <div className="containerCard">
            <CardInline />

          </div>
        </div>
      </section>
    </>
  )
}

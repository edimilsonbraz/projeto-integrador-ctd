import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { ContainerCategory } from "../../components/ContainerCategory";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faLocationDot,
  faCalendarCheck
} from '@fortawesome/free-solid-svg-icons'

import './style.css'

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
             
              <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={onChange}
              className="input"
              dateFormat="dd/MM/yyyy"
            />
           
                {/* <DatePicker
                selectsRange={true}
                className="input"
                placeholderText="Check in - Check out"
               
              /> */}
          </div>

          <button>Buscar</button>
        </div>
      </div>
      

      <ContainerCategory></ContainerCategory>
    </>
  )
}

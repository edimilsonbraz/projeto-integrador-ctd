import { useState } from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { ContainerCategory } from '../../components/ContainerCategory'
import { CardInline } from '../../components/CardInline'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faCalendarCheck
} from '@fortawesome/free-solid-svg-icons'

import category from '../../../categories.json'
import './style.css'

export function Home() {
  const hotels = category.hotels

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  // function onChange(dates) {
  //   event.preventDefault()
  //   const [start, end] = dates
  //   setStartDate(start)
  //   setEndDate(end)
  //   console.log(startDate + '==>' + endDate)
  // }

  return (
    <>
      <div className="containerBuscador">
        <h1>Buscar ofertas em hotéis, casas e muito mais</h1>

        <div className="containerGlobal contentInputs">
          {/* <form action=""> */}
          <div className="inputs">
            <label htmlFor="destino">
              <FontAwesomeIcon icon={faLocationDot} />
            </label>
            <input type="text" id="destino" placeholder="Onde vamos?" />
          </div>

          <div className="inputs">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              className="input"
              dateFormat="dd/MM/yyyy"
              placeholderText="Check-in"
            />

            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              className="input"
              dateFormat="dd/MM/yyyy"
              placeholderText="Check-out"
            />
            <label htmlFor="check-out">
              <FontAwesomeIcon icon={faCalendarCheck} />
            </label>
          </div>

          <button type="submit">Buscar</button>
          {/* </form> */}
        </div>
      </div>

      <section className="containerGlobal caterory">
        <h2>Buscar por tipo de acomodação</h2>

        <ContainerCategory />
      </section>

      <section className="containerRecomendacao">
        <div className="contentRecomendacao">
          <h2>Recomendações</h2>

          <div className="containerCard">
            {hotels.map((item) => {
              return (
                <CardInline
                  key={item.title}
                  img={item.img}
                  star={item.star}
                  numberAvaliation={item.numberAvaliation}
                  textAvaliation={item.textAvaliation}
                  title={item.title}
                  description={item.description}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

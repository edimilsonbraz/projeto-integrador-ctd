import { useState } from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { ContainerCategory } from '../../components/ContainerCategory'
import { CardInline } from '../../components/CardInline'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import category from '../../../categories.json'
import './style.css'

export function Home() {
  const hotels = category.hotels
  
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)

  function onChange(dates) {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <>
      <div className="containerBuscador">
        <h1>Buscar ofertas em hotéis, casas e muito mais</h1>

        <div className="containerGlobal contentInputs">
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

          </div>

          <button>Buscar</button>
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
            })
            }
          </div>
        </div>
      </section>
    </>
  )
}

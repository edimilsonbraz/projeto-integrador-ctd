import { useState } from 'react'
import category from '../../../categories.json'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { ContainerCategory } from '../../components/ContainerCategory'
import { CardInline } from '../../components/CardInline'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faCalendarCheck
} from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.css'

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
      <div className={styles.containerBuscador}>
        <h1>Buscar ofertas em hotéis, casas e muito mais</h1>

        <div className={`containerGlobal ${styles.contentInputs}`}>
          {/* <form action=""> */}
          <div className={styles.inputs}>
            <label htmlFor="destino">
              <FontAwesomeIcon icon={faLocationDot} />
            </label>
            <input type="text" id="destino" placeholder="Onde vamos?" />
          </div>

          <div className={styles.inputs}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              className={styles.inputDatePicker}
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
              className={styles.inputDatePicker}
              dateFormat="dd/MM/yyyy"
              placeholderText="Check-out"
            />
            <label htmlFor="check-out">
              <FontAwesomeIcon icon={faCalendarCheck} />
            </label>
          </div>

          <button type="submit" className={styles.buttonBuscar}>Buscar</button>
          {/* </form> */}
        </div>
      </div>

      <section className={`containerGlobal ${styles.category}`}>
        <h2>Buscar por tipo de acomodação</h2>

        <ContainerCategory />
      </section>

      <section className={styles.containerRecomendacao}>
        <div className={styles.contentRecomendacao}>
          <h2>Recomendações</h2>

          <div className={styles.containerCard}>
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

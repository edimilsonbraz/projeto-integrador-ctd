import { NavLink } from 'react-router-dom'
import logo1 from '../../assets/logo1.svg'

import styles from './styles.css'

export function Header() {
  return (
    <div className="headerContainer">
      <div className='headerImg'>
        <NavLink to="/" end title="Home">
          <img src={logo1} alt="" />
        </NavLink>
        <p>Sinta-se em casa</p>
      </div>

      <div className='headerButtons'>
        <button>Criar conta</button>
        <button>Iniciar sessão</button>
      </div>
    </div>
  )
}

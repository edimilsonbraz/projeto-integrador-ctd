import { NavLink } from 'react-router-dom'
import {ToggleMenu} from '../ToggleMenu';

import styles from './styles.module.css'
import logo1 from '../../assets/logo1.svg'

export function Header() {

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerImg}>
          <NavLink to="/" end title="Home">
            <img src={logo1} alt="" />
          </NavLink>
          <p>Sinta-se em casa</p>
        </div>

        <ToggleMenu />

        <div className={styles.headerButtons}>
          <NavLink to="/register" end title="Criar conta">
            <button>Criar conta</button>
          </NavLink>
          <NavLink to="/login" end title="Iniciar sessão">
            <button>Iniciar sessão</button>
          </NavLink>
        </div>
      </div>
    </>
  )
}

import { Link, NavLink } from 'react-router-dom'
import logo1 from '../../assets/logo1.svg'

import './styles.css'
import ToggleMenu from '../ToggleMenu';

export function Header() {

  return (
    <>
      <div className="headerContainer">
        <div className='headerImg'>
          <NavLink to="/" end title="Home">
            <img src={logo1} alt="" />
          </NavLink>
          <p>Sinta-se em casa</p>
        </div>
        <ToggleMenu></ToggleMenu>
        <div className='headerButtons'>
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

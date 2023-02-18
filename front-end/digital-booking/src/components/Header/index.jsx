import { Link, NavLink } from 'react-router-dom'
import logo1 from '../../assets/logo1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faXmark
} from '@fortawesome/free-solid-svg-icons'

import './styles.css'
import { useState } from 'react';

export function Header() {

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () =>
  {
    setOpenMenu(!openMenu);
  };

  return (
    <>
    {openMenu ?
      (<div className='menu-mobile'>
        <div><h1>MENU</h1></div>
        <div>
          <button><Link to={'/register'}>Criar conta</Link></button>
          <button><Link to={'/login'}>Fazer login</Link></button>
        </div>
      </div>) : null
    }
      <div className="headerContainer">
        <div className='headerImg'>
          <NavLink to="/" end title="Home">
            <img src={logo1} alt="" />
          </NavLink>
          <p>Sinta-se em casa</p>
        </div>
        <button onClick={toggleMenu} className='menu-mobile-icon'>{openMenu ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}</button>
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

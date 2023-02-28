import './style.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faXmark
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ToggleMenu() {

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <button onClick={toggleMenu} className={`button-hamburguer ${openMenu ? 'button-hamburguer-fixed' : ''}`}>{openMenu ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}</button>
            {openMenu ?
                (<div className='menu-mobile'>
                    <div>
                        <h1>MENU</h1>
                        <button><Link to={'/register'}>Criar conta</Link></button>
                        <button><Link to={'/login'}>Fazer login</Link></button>
                    </div>
                </div>) : null
            }
            </>
    );
}

export default ToggleMenu;
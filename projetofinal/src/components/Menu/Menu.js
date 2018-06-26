import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logoweb.jpg'
import './Menu.css'


function Menu(props) {
    return (
        <nav className="menu">

            <Link to="/">
                <img className="menu__logo" src={logo} alt="Logo" />
            </Link>
            
            <ul className="menu__links">                 
                <li className="menu__stubborn"><Link to="/"> <a>Home</a> </Link></li>
                <li className="menu__stubborn"><Link to="/moreabout"> <a>SaibaMais</a> </Link></li>
                <li className="menu__stubborn"><Link to="/acervo"> <a>Galeria</a> </Link></li>
   
            </ul>

       </nav>
    )
}

export default Menu
import React from 'react'
import { Link } from 'react-scroll'
import logo from './logoweb.jpg'
import './Navbar.css'


function Navbar(props) {
    return (
        <nav className="navbar">
            <Link to="home" smooth={true} duration={1000}>
                <img className="navbar__logo" src={logo} alt="Logo" />
            </Link>
            
            <ul className="navbar__links">                 
                <li><Link to="home-element" smooth={true} duration={1000}>Home </Link></li>    
                <li><Link to="about-element" smooth={true} duration={1000}>Sobre </Link></li>    
                <li><Link to="galery-element" smooth={true} duration={1000}>Galeria </Link></li>   
            </ul>
        </nav>
    )
}

export default Navbar
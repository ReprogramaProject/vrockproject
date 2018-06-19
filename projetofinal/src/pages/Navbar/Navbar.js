import React from 'react'
// import logomobile from './logomobile.jpg'
import logo from './logoweb.jpg'
import './Navbar.css'
import { Link } from 'react-scroll'



function Navbar(props) {
    return (
        <nav className="navbar">
            <div>
               <Link to="home" smooth={true} duration={1000}>
               <img className="navbar__logo" src={logo} alt="Logo" />
               </Link>
            </div>
            <div>
                <ul className="topbar">                 
                    <li><Link to="home" smooth={true} duration={1000}>Home </Link></li>    
                    <li><Link to="about" smooth={true} duration={1000}>Sobre </Link></li>    
                    <li><Link to="galery" smooth={true} duration={1000}>Galeria </Link></li>
                    <li><Link to="contact" smooth={true} duration={1000}>Contato </Link></li>       
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
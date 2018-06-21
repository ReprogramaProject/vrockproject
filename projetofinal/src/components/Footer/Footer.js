import React from 'react'
import './Footer.css'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaPinterestP from 'react-icons/lib/fa/pinterest'


function Footer (props) {
    return (
        <div className="footer">
        <div className="footer___align">
            <ul className="footer___list"> 
                <li className="media__link">
                    <a href="https://github.com/ReprogramaProject/ArkeVRock"><FaInstagram /></a>
                </li>

                <li className="media__link">
                    <a href="https://twitter.com/vrock360/"><FaTwitter />
                    </a>
                </li>    

                <li className="media__link">
                    <a href="https://github.com/ReprogramaProject/ArkeVRock"><FaPinterestP /></a>
                </li>
            </ul>                        
        </div>
        <p> © 2018 | VROCK by @wwwbrunagon |  All rights reserved </p>                   
                        

    </div>
    )
}

export default Footer
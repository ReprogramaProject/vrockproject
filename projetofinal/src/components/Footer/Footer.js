import React from 'react'
import './Footer.css'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaPinterestP from 'react-icons/lib/fa/pinterest'


function Footer (props) {
    return (
        <div className="footer">

        <div className="footer___align">

            <div>
                <ul className="footer___list"> 
                    <li className="media__link">
                    <a href="https://www.instagram.com/vrock360/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </li>

                    <li className="media__link">
                        <a href="https://twitter.com/vrock360/" target="_blank" rel="noopener noreferrer"><FaTwitter />
                        </a>
                    </li>    

                    <li className="media__link">
                        <a href=""><FaPinterestP /></a>
                    </li>
                </ul>
            </div> 
            <div>
                <p> © 2018 | VROCK by @wwwbrunagon |  All rights reserved </p>    
            </div>

        </div>
                       
                        

    </div>
    )
}

export default Footer
import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaPinterestP from 'react-icons/lib/fa/pinterest-p'
import img from './vrock360.jpg'
import oculus from './oculusmenor.png'



class About extends React.Component{
 
   
    render() {
        
        return (
            <div className="about">                        
                <div>
                    <h2>Olá, quem bom te ver por aqui! </h2>
                    
                    <div className="about__flex">
                        <div className="description"> 
                            <h3>VROCK - Arke0360º</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            <div className="oculus">
                                <div> 
                                    <a href="https://github.com/ReprogramaProject/ArkeVRock">
                                        <img className="oculus___link" src={oculus} alt="oculus" />
                                    </a>
                                </div>
                                <div>                              
                                    <a className="oculus___acss" href="https://anselm.github.io/aterrain/examples/helloworld/tile.html" target="_blank">
                                      Acesse e faça um tour pela Realidade Virtual.
                                    </a>
                                </div>                            
                           </div>

                            <div className="description"> 
                                <p>Lorem ipsum dolor sit amet </p>

                                 
                                 <Link to="/moreabout">
                                        <button className='button'> SAIBA MAIS </button>
                                </Link>

                                
                            </div>

                        <div>
                                <ul className="socialmedia___list"> 
                                    <li className="socialmedia___link ">
                                        <a href="https://github.com/ReprogramaProject/ArkeVRock"><FaInstagram /></a>
                                    </li>

                                    <li className="socialmedia___link ">
                                        <a href="https://twitter.com/vrock360/"><FaTwitter />
                                        </a>
                                    </li>    

                                    <li className="socialmedia___link">
                                        <a href="https://github.com/ReprogramaProject/ArkeVRock"><FaPinterestP /></a>
                                    </li>
                                </ul>                        
                            </div>
                        </div>

                        <div>
                            <div> 
                                <a href="https://sketchfab.com/models/2a32a7cca3424109a54704e623d6a421" target= "_blank"> <img className="img__vrock" src={img} alt="Logo" /> </a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                </p>                            
                            </div>
                            
                        </div>                                              
                    </div>
                </div>
                 
                
            </div>
        )
    }

}


export default About
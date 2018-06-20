import React from 'react'
import './About.css'
import FaBeer from 'react-icons/lib/fa/beer'
import img from './cavepains.jpg'



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
                        </div>
                        <div>
                            <div> 
                                <a href="https://github.com/ReprogramaProject/ArkeVRock"> <img className="img__vrock" src={img} alt="Logo" /> </a>                            
                            </div>
                            <div className="social___media"> 
                                <a href="https://github.com/ReprogramaProject/ArkeVRock"> Facebook  <FaBeer /> </a>                         
                                <a href="https://github.com/ReprogramaProject/ArkeVRock"> Instagram  <FaBeer /> </a>                         
                                <a href="https://github.com/ReprogramaProject/ArkeVRock"> Twiiter  <FaBeer /> </a>                         
                            </div>
                        </div>                                              
                    </div>
                </div>
                 
                
            </div>
        )
    }

}


export default About
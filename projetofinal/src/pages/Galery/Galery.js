import React from 'react'
import './Galery.css'
import { Link } from 'react-router-dom'
import rupestre from './rupestre.png'
import cavernas from './cavernas.png'
import arquitetura from './arquitetura.png'
import paisagens from './paisagens.png'

class Galery extends React.Component{

    render() {
        
        return (
            <div className="galery">            
                <h1> Galeria VRock </h1>
                <div className="galery___flex"> 

                    <div>
 
                        <div> 
                            <Link to="/rupestre">
                                <img className="galeria__vrock" src={rupestre} alt="galeria__vrock" />
                            </Link>                             
                        </div>
                    
                        <div> 
                            <Link to="/cavernas">
                                <img className="galeria__vrock" src={cavernas} alt="galeria__vrock" />                            
                            </Link>  
                    
                        </div>
                    </div>

                    <div>
                         <div> 
                            <Link to="/arquitetura">
                                <img className="galeria__vrock" src={arquitetura} alt="galeria__vrock" />
                            </Link>                           
                        </div>
                    
                        <div> 
                            <Link to="/paisagens">
                                <img className="galeria__vrock" src={paisagens} alt="galeria__vrock" />
                            </Link>                                                    
                        </div>
                    </div>
                    
 
                </div>
            </div>
        )
    }

}

export default Galery
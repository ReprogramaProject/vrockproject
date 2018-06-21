import React from 'react'
import './Galery.css'
import rupestre from './rupestre.png'
import cavernas from './cavernas.png'
import arquitetura from './arquitetura.png'
import paisagens from './paisagens.png'

class Galery extends React.Component{

    render() {
        
        return (
            <div className="galery">            
                <h2> Galeria VRock </h2>
                <div className="galery___flex">  
                    <div>
                        <div> 
                            <a href=""> <img className="galeria__vrock" src={rupestre} alt="galeria__vrock" /> </a>                            
                        </div>
                    
                        <div> 
                            <a href=""> <img className="galeria__vrock" src={cavernas} alt="galeria__vrock" /> </a>                            
                        </div>
                    
                    </div>

                    <div>
                        <div> 
                            <a href=""> <img className="galeria__vrock" src={arquitetura} alt="galeria__vrock" /> </a>                            
                        </div>
                    
                        <div> 
                            <a href=""> <img className="galeria__vrock" src={paisagens} alt="galeria__vrock" /> </a>                            
                        </div>
                    
                    </div>
                </div>
            </div>
        )
    }

}

export default Galery
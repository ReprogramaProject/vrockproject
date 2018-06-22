import React, { Component } from 'react'
import './Moreabout.css'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import vrock__diy from './moreabout001.png'
import vrock__motivation from './moreabout002.png'
import vrock__gcard from './gcard.jpg'




class Moreabout extends Component {
 
   
    render() {
        
        return (
        
            <div className="moreabout">
              <Menu />

                <div className="manifesto">
                    <div>
                         <img className="img_moreabout" src={vrock__motivation} alt="vrock" />
                    </div>
                    <div className="manifesto___paragrafo">
                        <h2>VROCK </h2>
                        <h3> Realidade Virtual por um mundo melhor  </h3>
                        <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        </p>
                        <p>
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
     
                        </p>
                    </div>
                </div>
                <hr className="row"/>
                <div className="chamada">
                    <div>  
                        <h1> Realidade Virtual pode apoiar preservação do ambiente e da cultura e ser uma grande aliada da educação! </h1>
                    </div>
                </div>
                <hr className="row"/>
                    <div className="manifesto">
                        <div>
                            <img className="img_moreabout" src={vrock__diy} alt="vrock" />
                        </div>
                        <div className="manifesto___paragrafo">
                            <h2>VROCK </h2>
                            <h3> Realidade Virtual por um mundo melhor  </h3>
                            <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>

                    <div className="cardbox">
                        <div className="cardboxh3"> 
                            <h3> Crie seu próprio Cardbox, clique na imagem abaixo para saber como.</h3>
                            
                        </div>

                
                        <div>
                        <a href="https://vr.google.com/intl/pt-BR_pt/cardboard/get-cardboard/" target="_blank" rel="noopener noreferrer">
                            <img className="img_gcard" src={vrock__gcard} alt="vrock" />
                        </a>
                        </div>
                    </div>
                    
                    

              <Footer />
        </div>
        )
    }

}


export default Moreabout
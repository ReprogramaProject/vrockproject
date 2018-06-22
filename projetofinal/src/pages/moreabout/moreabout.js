import React, { Component } from 'react'
import './Moreabout.css'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import vrock__diy from './moreabout001.png'
import vrock__motivation from './moreabout002.png'
import vrock__gcard from './gcard.jpg'
import oculus from './oculusmenor.png'




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
                        <p>  Uma plataforma de Mixed Realities acessível, que tem a intenção difundir um acervo de imagens e vídeos  360º de elementos arqueológicos, geológicos, e arquitetônicos, pois acreditamos que é uma contribuição para educação e preservação. 
                        vocês visualizarem em 360º os sítios arqueológicos, geológicos e elementos arquitetônicos
                        </p>
                        <p>
                        A ideia surgiu da paixão pela Mixed Realities, ou realidade mista (MR), às vezes chamada de realidade híbrida, e poder criar a fusão de mundos real e virtual para produzir novos ambientes e visualizações onde esse mundo arqueo/geológico e digitais tivessem a chance de coexistir.
     
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
                            <h3> Realidade Mista acessível! </h3>
                            <p> A realidade mista ocorre não apenas no mundo físico ou no mundo virtual, mas é uma mistura de realidade e realidade virtual, abrangendo tanto a realidade aumentada quanto a virtualidade aumentada  via tecnologia imersiva.
                            </p>

                            <p> Para o VROCK estamos usando MR através do JavaScript do genial mundo aberto do A-Frame, que é um framework web para construir experiências de realidade virtual. É possível criar o WebVR com HTML e Entity-Component, funciona no Vive, Rift, Daydream, GearVR, desktop.
                            </p>

                            <p> Aqui nessa plataforma vamos montar um acervo dinâmico de imagens. Nesse momento você pode postar suas imagens no twitter usando as hashtags:  #cavevrock360 - para cavernas <br/>
                                #rupestrevrock360 - para pinturas rupestres<br/>
                                #arquiteturavrock360 - para elementos arquitetônicos <br/>
                                #paisagensvrock360 - para paisagens arqueo, geo e espeleológicas<br/>
                                #arquiteturavrock360 - para elementos arquitetônicos<br/>
                                #vestigiossvrock360 - para vestígios arqueológicos<br/>
                                #arkeovrock360 - para sítios arqueológicos<br/><br/>
                                Assim você nos ajuda a criar um acervo incrível sobre essas maravilhas do Brasil. Ajuda ainda a preservar a cultura, nossa história e estimula o apreço pela preservação. 

                            </p>

                        </div>
                        
                    </div>
                  
                    <div className="chamada2">
                        <div>  
                            <h2> Buscamos parceiros que queiram desenvolver imagens/videos e animação 3D para contribuir com nossa plataforma. </h2>
                        </div>
                    </div>
                

                    <div className="cardboxMabout">
                        <div className="cardboxMabout">
                            <div>
                                 <h2> Crie seu próprio Cardbox</h2>
                            </div>
                            <div className="oculusMabout">
                                <div> 
                                    <a href="">
                                    <img className="oculusMabout___link" src={oculus} alt="oculus" />
                                </a>

                                </div>
                                <div>                              
                                    <a className="oculusMabout___acss" href="https://vr.google.com/intl/pt-BR_pt/cardboard/get-cardboard/" target="_blank" rel="noopener noreferrer">
                                    Navegue pela Realidade Virtual.
                                    </a>
                                </div>                            
                            </div>
                        </div> 

                        <div>
                            <a href="https://vr.google.com/intl/pt-BR_pt/cardboard/get-cardboard/" target="_blank" rel="noopener noreferrer">
                            <img className="img_gcardMabou" src={vrock__gcard} alt="vrock" />
                            </a>
                        </div>
                                                       
                    </div>

                
                             

              <Footer />
        </div>
        )
    }

}


export default Moreabout
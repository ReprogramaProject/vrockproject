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
                        <div className="description___about"> 
                            <h3>VROCK</h3>
                            <p className="p__about"> Uma plataforma de Mixed Realities acessível, que tem a intenção difundir um acervo de imagens e vídeos 360º de elementos arqueológicos, geológicos, e arquitetônicos, pois acreditamos que é uma contribuição para educação e preservação. vocês visualizarem em 360º os sítios arqueológicos, geológicos e elementos arquitetônicos. 
                            A ideia surgiu da paixão pela Mixed Realities, ou realidade mista (MR), às vezes chamada de realidade híbrida, e poder criar a fusão de mundos real e virtual para produzir novos ambientes e visualizações onde esse mundo arqueo/geológico e digitais tivessem a chance de coexistir.
                            </p>
                            <div className="oculus">
                                <div> 
                                    <a href="">
                                        <img className="oculus___link" src={oculus} alt="oculus" />
                                    </a>
                                </div>
                                <div>                              
                                    <a className="oculus___acss" href="https://anselm.github.io/aterrain/examples/helloworld/tile.html" target="_blank" rel="noopener noreferrer">
                                      Faça um tour pela Realidade Virtual.
                                    </a>
                                </div>                            
                                <div>                              
                                    <a className="oculus___mobile" href="https://anselm.github.io/aterrain/examples/helloworld/tile.html" target="_blank" rel="noopener noreferrer">
                                      Faça um tour pela <br/> Realidade Virtual.
                                    </a>
                                </div>                            
                           </div>

                            <div className="description"> 
                                <p className="p__description">Acesse nossas mídias e compartilhe suas imagens! </p>

                                 
                                 <Link to="/moreabout">
                                        <button className='botao'> SAIBA MAIS </button>
                                </Link>

                                
                            </div>

                        <div>
                            <ul className="socialmedia___list"> 
                                    <li className="socialmedia___link ">
                                        <a href="https://www.instagram.com/vrock360/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                                    </li>

                                    <li className="socialmedia___link">
                                        <a href="https://twitter.com/vrock360/" target="_blank" rel="noopener noreferrer"><FaTwitter />
                                        </a>
                                    </li>    

                                    <li className="socialmedia___link">
                                        <a href=""><FaPinterestP /></a>
                                    </li>
                                </ul>                        
                            </div>
                        </div>

                        <div>
                            <div className="imgVrabout"> 
                                <a href="https://sketchfab.com/models/2a32a7cca3424109a54704e623d6a421" target="_blank" rel="noopener noreferrer"> <img className="img__vrockAbout" src={img} alt="Logo" /> </a>
                                <p className="pabout"> Rolling Drone - Amigo da arqueologia <br/>
                                Clique na imagem acima para um tour arqueológico!
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
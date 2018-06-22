import React from 'react'
import Slider from "react-slick"
import arkeovr from './arkeovr.jpg'
import arkeohorizon from './arkeohorizon.jpg'
import arkeo360 from './arkeo360.jpg'
import './Home.css'


class Home extends React.Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            focusOnSelect: true,
            arrows: false,
            cssEase: "linear",
        };

        return (
            <div className="home">
                <div>
                    <Slider {...settings}>
                        <div>

                        <a href="https://anselm.github.io/aterrain/examples/place/index.html#lat=36.57850&lon=-118.29226&elev=1000" target="_blank" rel="noopener noreferrer">
                            <img className="home__imagem" src={arkeovr} alt="Visualizar elementos arquitetônicos" /> 
                        </a>

 


                        </div>

                        <div>
                        <a href="https://anselm.github.io/aterrain/examples/helloworld/duck.html" target="_blank" rel="noopener noreferrer">
                            <img className="home__imagem" src={arkeohorizon} alt="Expanda seus horizontes" />
                        </a>
                        </div>

                        <div>
                       
                        <a href=" https://aframe.io/examples/showcase/sky/" target="_blank" rel="noopener noreferrer">
                            <img className="home__imagem" src={arkeo360} alt="Acervo 360º" />
                        </a>
                        </div>                    
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Home
import React from 'react'
import './Home.css'
import arkeovr from './arkeovr.jpg'
import arkeohorizon from './arkeohorizon.jpg'
import arkeo360 from './arkeo360.jpg'
import Slider from "react-slick"


class Home extends React.Component {
    render() {
      let settings = {
        swipeToSlide: true,
        focusOnSelect: true,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        cssEase: "linear",
       
      };
      return (
        <div className="home">
        
            <Slider {...settings}>
                <div>
                    <img className="bgimg" src={arkeovr} alt="BG" />
                </div>
                <div>
                    <img className="bgimg" src={arkeohorizon} alt="BG" />
                </div>
                <div>
                    <img className="bgimg" src={arkeo360} alt="BG" />
                </div>         
            </Slider>
        </div>
      );
    }
  }

export default Home
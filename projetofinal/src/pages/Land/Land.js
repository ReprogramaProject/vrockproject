import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Home from '../Home/Home'
import About from '../About/About'
import Galery from '../Galery/Galery'
import { Element } from 'react-scroll'

class Land extends Component {
  render() {
    return (
      <div>
        <Element name="home-element">
          <Home />
        </Element>

        <Element name="about-element">
         <About />
        </Element>

        <Element name="galery-element">
          <Galery />
        </Element>
        
        <Footer />
      </div>
    );
  }
}

export default Land;

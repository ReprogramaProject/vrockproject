import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import About from '../About/About'
import Galery from '../Galery/Galery'
import Footer from '../../components/Footer/Footer'
import { Element } from 'react-scroll'

class Land extends Component {
  render() {
    return (
      <div>
        
        <Navbar />

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

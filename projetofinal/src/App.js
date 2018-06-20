import React, { Component } from 'react';
import Navbar from './pages/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Galery from './pages/Galery/Galery'
import Contact from './pages/Contact/Contact'
import { Element } from 'react-scroll'


class App extends Component {
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

        <Element name="contact-element">
          <Contact />
        </Element>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import './Cavernas.css'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import Twitter from '../../components/Twitter/Twitter'




class Cavernas extends Component {
 
   
    render() {
        
        return (
        
            <div className="cavernas">
              <Menu />
              
              <Twitter />

              <Footer />
            </div>
        )
    }

}


export default Cavernas
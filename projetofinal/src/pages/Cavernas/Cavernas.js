import React, { Component } from 'react'
import './Cavernas.css'
import Menu from '../../components/Menu/Menu'
import Tweets from '../Tweets/Tweets'



class Cavernas extends Component {
 
   
    render() {
        
        return (
        
            <div className="cavernas">
              <Menu />

                 <div className="cave"> <Tweets /> </div>  

            </div>
        )
    }

}


export default Cavernas
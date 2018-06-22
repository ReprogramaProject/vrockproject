import React from 'react'
import './Arquitetura.css'
import Menu from '../../components/Menu/Menu'
import Tweets from '../Tweets/Tweets'

class Arquitetura extends React.Component{
    

    render() {
        
        return (
            <div className="arquitetura">
                <Menu />
                <div className="cave"> <Tweets /> </div>                    
            </div>
        )
    }

}

export default Arquitetura
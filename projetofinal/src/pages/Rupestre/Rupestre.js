import React from 'react'
import './Paisagens.css'
import Menu from '../../components/Menu/Menu'
import Tweets from '../Tweets/Tweets'


class Rupestre extends React.Component{
    

    render() {
        
        return (
            <div className="rupestre">
                <Menu />

                <div className="rupestre"> <Tweets /> </div>  

            </div>
        )
    }

}

export default PaisRupestreagens
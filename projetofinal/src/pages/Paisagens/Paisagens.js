import React from 'react'
import './Paisagens.css'
import Menu from '../../components/Menu/Menu'
import Tweets from '../Tweets/Tweets'


class Paisagens extends React.Component{
    

    render() {
        
        return (
            <div className="paisagens">
                <Menu />

                <div className="paisagens"> <Tweets /> </div>  

            </div>
        )
    }

}

export default Paisagens
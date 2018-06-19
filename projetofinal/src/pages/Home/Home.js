import React from 'react'
import './Home.css'
import bgimg from './arkeovr.jpg'


class Home extends React.Component{

    render() {
        
        return (
            <div className="home">
                <div>
                     <img className="bgimg" src={bgimg} alt="Backgroundimg" />
                </div>          
            </div>
        )
    }

}

export default Home
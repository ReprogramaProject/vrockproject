import React from 'react'
import Tweet from 'react-tweet'
import * as apiTwitter from '../../apis/twitter'
import loading from './loading.svg'
import './Tweets.css'

class Twitter extends React.Component {
    state = {
        statuses: [],
        loading: true
    }

    componentDidMount() {
        apiTwitter.searchTweets('kanye')
            .then(response => {
                this.setState({ 
                    statuses: response.data.statuses, 
                    loading: false
                })
            })
            .catch(error => {
                console.log("Error getting latest tweets.", error)
            })
    } 

    render() {
        const linkProps = {target: '_blank', rel: 'noreferrer'}

        return (
            <div className="tweets">
                <h1>Tweets</h1>

                {this.state.loading ? (
                    <img className="tweets_loading" src={loading} alt="Loading" />
                ) : (
                    this.state.statuses.map(tweetData => (
                        <Tweet key={tweetData.id} data={tweetData} linkProps={linkProps} />
                    ))
                )}
            </div>
        )
    }
}

export default Twitter
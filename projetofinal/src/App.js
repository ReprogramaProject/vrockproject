import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import Land from './pages/Land/Land'
import Moreabout from './pages/Moreabout/Moreabout'
import Acervo from './pages/Acervo/Acervo'
import Cavernas from './pages/Cavernas/Cavernas'
import Paisagens from './pages/Cavernas/Cavernas'
import Rupestre from './pages/Cavernas/Cavernas'
import Arquitetura from './pages/Cavernas/Cavernas'
import Tweets from './pages/Tweets/Tweets'
import { Route, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
         <Route exact path = '/' component={Land}/>
         <Route path="/moreabout" component={Moreabout} />
         <Route path="/acervo" component={Acervo} />
         <Route path="/cavernas" component={Cavernas} />
         <Route path="/paisagens" component={Paisagens} />
         <Route path="/rupestre" component={Rupestre} />
         <Route path="/arquitetura" component={Arquitetura} />
         <Route path="/tweets" component={Tweets} />
      </Switch>
    </div>
    );
  }
}

export default App;

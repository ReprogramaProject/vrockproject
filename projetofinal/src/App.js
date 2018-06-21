import React, { Component } from 'react'
import Land from './pages/Land/Land'
import moreabout from './pages/moreabout/moreabout'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>
         <Route exact path = '/' component={Land}/>
         <Route path="/moreabout" component={moreabout} />
      </Switch>
    </div>
    );
  }
}

export default App;

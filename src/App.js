import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './page/Home';
import Result from './page/Result';
import Selection from './page/Selection';
import Record from './page/Record';

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Route path="/"component={Home} exact={true} />
        <Route path="/selection" component={Selection} />
        <Route path="/result" component={Result} />
        <Route path="/record" component={Record} />
      </BrowserRouter> 
    )
  }
}

export default App;

import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './page/Home';
import Record from './page/Record';
import Result from './page/Result';
import Selection from './page/Selection';
import Preview from './page/Preview';

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Route path="/"component={Home} exact={true} />
        <Route path="/selection" component={Selection} />
        <Route path="/Record/:num" component={Record} />
        <Route path="/Preview/:num" component={Preview} />
        <Route path="/Result/:num" component={Result} />
      </BrowserRouter> 
    )
  }
}

export default App;

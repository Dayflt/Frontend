import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './page/Home';
import Record from './page/Record';
import Result from './page/Result';
import Selection from './page/Selection';
import Preview from './page/Preview';
import Gallery from './page/Gallery';

export const storage = React.createContext({
  form : new FormData(),  });

const Select_file = () => {
  const [fdata, setfb] = useState(new FormData());

}



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <storage.Provider>
          <Route path="/" component={Home} exact={true} />
          <Route path="/selection" component={Selection} />
          <Route path="/result" component={Result} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/Preview/:formdata" component={Preview} />
          <Route path="/Record/:num" component={Record} />
        </storage.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../src/Pages/Home';
import Calc from '../src/Pages/Calc';
import PageNotFound from '../src/Pages/PageNotFound';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/calc" component={Calc} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

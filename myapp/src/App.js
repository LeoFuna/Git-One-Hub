import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/details" component={ Details } />
        </Switch>
      </div>
    );
  }
}

export default App;

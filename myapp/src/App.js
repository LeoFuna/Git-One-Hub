import './App.css';
import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Content from './components/Content';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Input />
        <Content />
      </div>
    );
  }
}

export default App;

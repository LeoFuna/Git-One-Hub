import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Content from '../components/Content';

class Home extends React.Component {
  render() {
    return(
      <>
        <Header />
        <Input />
        <Content />
      </>
    );
  }
}

export default Home;

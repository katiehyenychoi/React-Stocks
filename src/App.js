import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

// const API = 'http://localhost:3000/stocks/'

class App extends Component {


  render() {
    return (
      <div>
        <Header />
        <MainContainer />
      </div>
    );
  }
}

export default App;

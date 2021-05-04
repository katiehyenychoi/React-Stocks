import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

// const API = 'http://localhost:3000/stocks/'

class App extends Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     stocks: []
  //   }
  // }
  // componentDidMount() {
  //   fetch(API)
  //     .then(res => res.json())
  //     .then(stocksObj => this.setState({
  //       stocks: stocksObj
  //     }))
  // }

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

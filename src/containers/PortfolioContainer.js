import React, { Component } from 'react';
import Stock from '../components/Stock'


class PortfolioContainer extends Component {

  render() {
    // console.log(this.props)
    return (
      <div>
        <h2>My Portfolio</h2>
        {
          //render your portfolio stocks here
          // this.props.portfolioStock.map(stock => <Stock stock={stock} tradeStock={this.props.removeFromPortfolio} />)
          this.props.portfolioStock.map(stock => <Stock stock={stock} sellStock={this.props.removeFromPortfolio} />)
        }
      </div>
    );
  }

}

export default PortfolioContainer;

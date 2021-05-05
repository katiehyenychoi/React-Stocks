import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          // Be careful what you are setting props here!! You just send in the 'stock={stock}' here  thats it!
          // this.props.stocks.map(stock => <Stock stock={stock} tradeStock={this.props.addToPortfolio} />)
          // Here instaed of stock={this.props.stock}, we just say {stock} bc thats the argument in the map()

          this.props.stocks.map(stock => <Stock stock={stock} buyStock={this.props.addToPortfolio} />)
        }
      </div>
    );
  }

}

export default StockContainer;

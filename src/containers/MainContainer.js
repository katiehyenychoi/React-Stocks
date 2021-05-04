import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const API = 'http://localhost:3000/stocks/'

class MainContainer extends Component {

  constructor() {
    super()
    this.state = {
      stocks: [],
      portfolioStock: [],
      filter: 'All',
      sort: 'None'
    }
  }
  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(stocksObj => this.setState({
        stocks: stocksObj
      }))
  }

  //// do i need to pass in props in parens below? when to pass in?


  addToPortfolio = (id) => {
    let stockBought = this.state.stocks.find(stock => stock.id === id)
    // let oldIndex = this.state.stocks.indexOf(stockBought)
    // let remainStocks = this.state.stocks.filter(stock => stock.id !== stockBought.id)
    this.setState({
      // stocks: remainStocks,
      portfolioStock: [...this.state.portfolioStock, stockBought]
    })
  }

  // The logic for removal is that the selected one will be filtered out from the array
  removeFromPortfolio = (id) => {
    let remainPortStocks = this.state.portfolioStock.filter(portstock => portstock.id !== id)
    this.setState({
      portfolioStock: remainPortStocks
    })
  }



  //We'll be sending event.target.value from the dropdown (select tag) as a type arg
  filterType = (type) => {
    // console.log(type) //returns the event.target.value
    // let filteredStocks = this.state.stocks.filter(stock => stock.type == typeName)
    this.setState({
      filter: type
    })
  }


  //Sort
  sortStocks = (sortType) => {
    // console.log(sortType) //returns the event.target.value
    if (sortType === "Alphabetically") {
      let tickerSorted = this.state.stocks.sort((a, b) => a.ticker.localeCompare(b.ticker))
      this.setState({
        stocks: tickerSorted
      })
    } else if (sortType === "Price") {
      let priceSorted = this.state.stocks.sort((a, b) => a.price - b.price)
      this.setState({
        stocks: priceSorted
      })
    }
  }
  // i didnt have to write return inside then{} with more than one line of code

  render() {
    // console.log(this.state.portfolioStock)
    let displayFiltered = []
    if (this.state.filter === "All") {
      displayFiltered = this.state.stocks
    } else {
      displayFiltered = this.state.stocks.filter(stock => stock.type === this.state.filter)
    }

    return (
      <div>
        <SearchBar sortStocks={this.sortStocks} filterType={this.filterType} />

        <div className="row">
          <div className="col-8">

            <StockContainer addToPortfolio={this.addToPortfolio} stocks={displayFiltered} />
            {/*Must change stocks to stocks= {displayFilter} is from above inside render() */}
          </div>
          <div className="col-4">

            <PortfolioContainer portfolioStock={this.state.portfolioStock} removeFromPortfolio={this.removeFromPortfolio}
            />

          </div>
        </div>
      </div>
    );
  }

}

export default MainContainer;

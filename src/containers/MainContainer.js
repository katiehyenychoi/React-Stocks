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

  addToPortfolio = (id) => {
    //First find that stock object of that id 
    let stockBought = this.state.stocks.find(stock => stock.id === id)

    // let stockBought2 = this.state.stocks.filter(stock => stock.id === id)
    // filter returns an array of objects. We want just a single object- so use .find function

    this.setState({
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



  //We'll be sending event from the dropdown (select tag) as an argument
  filterType = (e) => {
    this.setState({
      filter: e.target.value
    })
    //Then inside render(), I need to replace this.state.stocks array with a new filtered array 
  }


  //Sort
  sortStocks = (e) => {
    if (e.target.value === "Alphabetically") {
      let tickerSorted = this.state.stocks.sort((a, b) => a.ticker.localeCompare(b.ticker))
      this.setState({
        stocks: tickerSorted
      })
    } else if (e.target.value === "Price") {
      let priceSorted = this.state.stocks.sort((a, b) => a.price - b.price)
      this.setState({
        stocks: priceSorted
      })
    }
  }

  //Another way - I can do ternary:
  // sortStocks = (sortType) => {
  //   // debugger
  //   this.setState({
  //     sorted: sortType,
  //     stocks: this.state.stocks.sort(
  //     (a,b) => sortType === "Price" ? a.price - b.price : a.name.localeCompare(b.name) )
  //   })
  // }




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

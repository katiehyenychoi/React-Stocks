import React from 'react'

// Must pass in props inside the parens below:
const Stock = (props) => (
  <div>
    {/* Since this INDIVIDUAL stock, you have the id passed in as prop for INDIVIDUAL stock! */}
    <div onClick={() => props.buyStock ? props.buyStock(props.stock.id) : props.sellStock(props.stock.id)} className="card">
      {/* <div onClick={() => props.tradeStock(props.stock.id)} className="card"> */}
      <div className="card-body">
        <h5 className="card-title">{
          //Company Name
          props.stock.name
        }</h5>
        <p className="card-text">{
          //ticker: stock price
          `${props.stock.ticker}: ${props.stock.price}`
        }</p>
      </div>
    </div>


  </div >
);

export default Stock

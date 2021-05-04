import React from 'react'

// Must pass in props inside the parens below:
const PortStock = (props) => (
    <div>
        {/* Since this INDIVIDUAL stock, you have the id passed in as prop for INDIVIDUAL stock! */}
        <div onClick={() => props.removeFromPortfolio(props.portstock.id)} className="card">
            <div className="card-body">
                <h5 className="card-title">{
                    props.portstock.name
                }</h5>
                <p className="card-text">{
                    //ticker: stock price
                    props.portstock.price
                }</p>
            </div>
        </div>



    </div >
);

export default PortStock
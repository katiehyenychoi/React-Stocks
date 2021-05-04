import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>

        <input onChange={(e) => { props.sortStocks(e.target.value) }} type="radio" value="Alphabetically" checked={null} />
        Alphabetically
      </label>
      <label>
        <input onChange={(e) => { props.sortStocks(e.target.value) }} type="radio" value="Price" checked={null} />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => { props.filterType(e.target.value) }}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;

import React, { Component } from "react";
class Filter extends Component {
  state = {};
  render() {
    const {size,sort,count,filterAndSort}=this.props;
    return (
      <div className="filter">
        <div className="filter-result">{count} Products</div>
        <div className="filter-sort">
          Order {""}
          <select value={sort} onChange={(e)=>filterAndSort(size,e.target.value)}>
            <option value="">Latset</option>
            <option value="Lowest">Lowest</option>
            <option value="Highest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Sizes {""}
          <select value={size} onChange={(e)=>filterAndSort(e.target.value,sort)}>
            <option value="">All</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">Xl</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filter;

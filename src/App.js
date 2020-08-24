import React, { Component } from "react";
import data from "./data.json";

import Products from "./components/Products";
import Filter from "./components/Filter/index";
class App extends Component {
  state = {
    products: data.products,
    sort: "",
    size: "",
    count: 3,
  };
  sortProductsHandle = (e) => {
    const sortValue = e.target.value;
    console.log(sortValue);
    let products = [...this.state.products];
    products = products.sort((a, b) =>
      sortValue === "Highest"
        ? a.price < b.price
          ? 1
          : -1
        : sortValue === "Lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a._id > b._id
        ? 1
        : -1
    );

    this.setState({ sort: sortValue, products });
  };
  filterProductsHandle = (e) => {
    // console.log();

    const selectedSize = e.target.value;
    let products = data.products;
    selectedSize === ""
      ? (products = data.products)
      : (products = products.filter((product) =>
          product.availableSizes.includes(selectedSize)
        ));
    this.setState({ size: selectedSize, products });
  };
  render() {
    const { products, size, sort } = this.state;

    return (
      <div className="grid-container">
        <header>
          <a href="/">EMMA Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main-content">
              <Filter
                count={products.length}
                size={size}
                sort={sort}
                sortProducts={this.sortProductsHandle}
                filterProducts={this.filterProductsHandle}
              />
              <Products products={products} />
            </div>
            <div className="sidebar">cart itrms</div>
          </div>
        </main>
        <footer> All Rights Are Reserved</footer>
      </div>
    );
  }
}

export default App;

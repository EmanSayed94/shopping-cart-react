import React, { Component } from "react";
import data from "./data.json";

import Products from "./components/Products/index";
class App extends Component {
  state = {
    products: data.products,
    size: "",
    sort: "",
  };
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">EMMA Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main-content">
              <Products products={this.state.products} />
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

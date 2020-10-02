import React, { Component } from "react";
import data from "./data.json";

import Products from "./components/Products";
import Filter from "./components/Filter/index";
import Cart from "./components/Cart";
class App extends Component {
  state = {
    products: data.products,
    sort: "",
    size: "",
    count: 3,
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
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
  addToCartHandle = (product) => {
    const cartItems = [...this.state.cartItems];
    let alreadyExist = false;
    // if (cartItems.length !== 0) {
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyExist = true;
      }
    });
    if (!alreadyExist) {
      cartItems.push({ ...product, count: 1 });
    }

    console.log("cartItems :>> ", cartItems);

    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  removeFromCartHandle = (product) => {
    let cartItems = [...this.state.cartItems];
    cartItems = cartItems.filter((item) => item._id !== product._id);
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  orderCreation = (order) => {
    alert("need to save order for " + order.name);
  };
  //test
  render() {
    const { products, size, sort, cartItems } = this.state;
    const { addToCartHandle, removeFromCartHandle, orderCreation } = this;

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
              <Products products={products} addToCart={addToCartHandle} />
            </div>
            <div className="sidebar">
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCartHandle}
                orderCreation={orderCreation}
              />
            </div>
          </div>
        </main>
        <footer> All Rights Are Reserved</footer>
      </div>
    );
  }
}

export default App;

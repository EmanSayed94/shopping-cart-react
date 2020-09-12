import React, { Component } from "react";
import Product from "../Product";

class Products extends Component {
  state = {};
  render() {
    const { addToCart } = this.props;
    return (
      <ul className="products">
        {this.props.products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ul>
    );
  }
}

export default Products;

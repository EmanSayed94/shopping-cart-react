import React, { Component } from "react";
import Product from "../Product";

class Products extends Component {
  state = {};
  render() {
    return (
      <ul className="products">
        {this.props.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    );
  }
}

export default Products;

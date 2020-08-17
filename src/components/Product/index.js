import React from "react";
const Product = ({ product }) => {
  return (
    <li>
      <div className="product">
        <a>
          <img src={product.image} alt={product.title} />
          <p>{product.title} </p>
        </a>
        <div className="product-price">
          <div>${product.price}</div>
          <button className="button primary">Add To Cart</button>
        </div>
      </div>
    </li>
  );
};

export default Product;

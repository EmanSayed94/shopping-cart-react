import React from "react";
const Product = ({ product, addToCart }) => {
  return (
    <li>
      <div className="product">
        <a>
          <img src={product.image} alt={product.title} />
          <p>{product.title} </p>
        </a>
        <div className="product-price">
          <div>${product.price}</div>
          <button onClick={() => addToCart(product)} className="button primary">
            Add To Cart
          </button>
        </div>
      </div>
    </li>
  );
};

export default Product;

import React from "react";
const Product = ({ product, addToCart,openModal }) => {
  return (
    
      <div className="product">
        <a>
          <img src={`/images/${product.image}`} alt={product.title} onClick={()=>openModal(product)}/>
          <p>{product.title} </p>
        </a>
        <div className="product-price">
          <div>${product.price}</div>
          <button onClick={() => addToCart(product)} className="button primary">
            Add To Cart
          </button>
        </div>
      </div>
  
  );
};

export default Product;

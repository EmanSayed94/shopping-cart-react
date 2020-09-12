import React, { Component } from "react";
class Cart extends Component {
  state = {};
  calculateTotal = (cartItems) => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    return total;
  };
  render() {
    const { cartItems, removeFromCart } = this.props;
    return (
      <div>
        {!cartItems.length ? (
          <div className="cart cart-header">no item in the cart</div>
        ) : (
          <React.Fragment>
            <div className="cart cart-header">
              You have {cartItems.length} item in Cart
            </div>

            <div className="cart">
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <li key={item._id} className="cart-item">
                    <div>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div>
                      {item.title}
                      <div className="right">
                        {`$${item.price} x ${item.count}  `}
                        <button
                          className="button"
                          onClick={() => removeFromCart(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {cartItems.length != 0 && (
              <div className="cart">
                <div className="total">
                  <div> Total: ${this.calculateTotal(cartItems)}</div>
                  <button className="button primary">Proceed</button>
                </div>
              </div>
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Cart;

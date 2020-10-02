import React, { Component } from "react";
import Fade  from 'react-reveal/Fade';

import CheckoutForm from "../CheckOutForm";



class Cart extends Component {
  state = {
    email: "",
    name: "",
    address: "",

    showCheckOut: false,
  };
  calculateTotal = (cartItems) => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    return total;
  };
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  createOrder = (e) => {
    e.preventDefault();
    const { email, name, address } = this.state;
    console.log(email);

    const order = {
      email,
      name,
      address,
      cartItems: this.props.cartItems,
    };
    this.props.orderCreation(order);
  };
  render() {
    const { cartItems, removeFromCart } = this.props;
    const { name, email, address } = this.state;
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
              <Fade left cascade>
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
              </Fade>
            </div>

            {cartItems.length != 0 && (
              <div className="cart">
                <div className="total">
                  <div> Total: ${this.calculateTotal(cartItems)}</div>
                  <button
                    onClick={() => this.setState({ showCheckOut: true })}
                    className="button primary"
                  >
                    Proceed
                  </button>
                </div>
              </div>
            )}
            {this.state.showCheckOut && (
              <CheckoutForm
                email={email}
                name={name}
                address={address}
                createOrder={this.createOrder}
                handleInput={this.handleInput}
              />
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Cart;

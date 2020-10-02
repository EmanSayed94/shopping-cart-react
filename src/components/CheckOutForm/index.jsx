import React from "react";
import Fade from "react-reveal/Fade"


const CheckOutForm = ({ email, name, address, handleInput, createOrder }) => {
  console.log(email);
  return (
    <div className="cart">
      <form onSubmit={createOrder}>
       <Fade right cascade>

       
        <ul className="form-container">
          <li>
            {" "}
            <label>E-mail</label>
            <input
              type="email"
              required
              onChange={handleInput}
              name="email"
              value={email}
            />
          </li>
          <li>
            {" "}
            <label>Name</label>
            <input
              type="text"
              required
              onChange={handleInput}
              name="name"
              value={name}
            />
          </li>
          <li>
            <label>Address</label>
            <input
              type="text"
              required
              onChange={handleInput}
              name="address"
              value={address}
            />
          </li>
          <li>
            <button className="button primary" type="submit">
              Checkout
            </button>
          </li>
        </ul>
        </Fade>
      </form>
    </div>
  );
};

export default CheckOutForm;

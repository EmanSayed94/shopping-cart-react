import React, { Component } from "react";
import { useState } from "react";
import Fade from "react-reveal/Fade";

import CheckoutForm from "../CheckOutForm";
import { formatCurrency } from "./../../util";

const Cart = (props) => {
	const { cartItems, removeFromCart, orderCreation } = props;

	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [showCheckOut, setShowCheckOut] = useState(false);

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleAddress = (e) => {
		setAddress(e.target.value);
	};

	const calculateTotal = (cartItems) => {
		const total = cartItems.reduce(
			(acc, item) => acc + item.price * item.count,
			0
		);
		return total;
	};

	const createOrder = (e) => {
		e.preventDefault();
		const order = {
			email,
			name,
			address,
			cartItems: props.cartItems,
		};
		orderCreation(order);
	};

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
									<li key={item.id} className="cart-item">
										<div>
											<img src={`/images/${item.image}`} alt={item.title} />
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
								<div> Total: ${formatCurrency(calculateTotal(cartItems))}</div>
								<button
									onClick={() => setShowCheckOut(true)}
									className="button primary"
								>
									Proceed
								</button>
							</div>
						</div>
					)}
					{showCheckOut && (
						<CheckoutForm
							email={email}
							name={name}
							address={address}
							createOrder={createOrder}
							handleEmail={handleEmail}
							handleName={handleName}
							handleAddress={handleAddress}
						/>
					)}
				</React.Fragment>
			)}
		</div>
	);
};

export default Cart;


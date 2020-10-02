import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";

import Product from "../Product";
import { formatCurrency } from "./../../util";

class Products extends Component {
	state = {
		product: null,
	};
	openModal = (product) => {
		this.setState({ product });
	};
	closeModal = () => {
		this.setState({ product: null });
	};
	render() {
		const { addToCart } = this.props;
		const { product } = this.state;
		return (
			<div>
				<Fade bottom cascade>
					<ul className="products">
						{this.props.products.map((product) => (
							<li>
								<Product
									key={product.id}
									product={product}
									addToCart={addToCart}
									openModal={this.openModal}
								/>
							</li>
						))}
					</ul>
				</Fade>
				{product && (
					<Modal isOpen={true} onRequestClose={this.closeModal}>
						<Zoom>
							<button onClick={this.closeModal} className="close-modal">
								x
							</button>
							<div className="product-details">
								<img src={product.image} alt="product-image" />
								<div className="product-details-description">
									<p>
										<strong>{product.title}</strong>
									</p>
									<p>{product.description}</p>
									<p>
										Availabe Sizes :{" "}
										{product.availableSizes.map((size) => (
											<span>
												<button className="button">{size}</button>
											</span>
										))}
									</p>
									<div className="product-price">
										<div>{formatCurrency(product.price)}</div>
										<button
											className="button primary"
											onClick={() => {
												addToCart(product);
												this.closeModal();
											}}
										>Add TO Cart</button>
									</div>
								</div>
							</div>
						</Zoom>
					</Modal>
				)}
			</div>
		);
	}
}

export default Products;

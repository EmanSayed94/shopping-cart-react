import React ,{useCallback}from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";

import Product from "../Product";
import { formatCurrency } from "./../../util";
import { useState } from "react";

const Products = (props) => {
	const [product, setProduct] = useState(null);

	const openModal = useCallback((product) => {
		setProduct(product);
	},[])
	const closeModal = useCallback(() => {
		setProduct(null);
	},[])

	return (
		<div>
			<Fade bottom cascade>
				<ul className="products">
					{props.products.map((product) => (
						<li key={product.id}>
							<Product
								product={product}
								addToCart={props.addToCart}
								openModal={openModal}
							/>
						</li>
					))}
				</ul>
			</Fade>
			{product && (
				<Modal isOpen={true} onRequestClose={closeModal}>
					<Zoom>
						<button onClick={closeModal} className="close-modal">
							x
						</button>
						<div className="product-details">
							<img src={`/images/${product.image}`} alt="product" />
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
											props.addToCart(product);
											closeModal();
										}}
									>
										Add TO Cart
									</button>
								</div>
							</div>
						</div>
					</Zoom>
				</Modal>
			)}
		</div>
	);
};

export default Products;


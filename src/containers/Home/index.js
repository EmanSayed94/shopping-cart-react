import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import Filter from "../../components/Filter/index";
import Cart from "../../components/Cart";
import Products from './../../components/Products/index';

import { getAllProducts,filterProductsBySize } from "../../redux/actions/productsActions";
import { sortProductsByPrice } from './../../redux/actions/productsActions';
import { FILTER_AND_SORT } from "../../redux/actionTypes";


class Home extends Component {
	state = {
		sort: "",
		size: "",
		count: 3,
		cartItems: localStorage.getItem("cartItems")
			? JSON.parse(localStorage.getItem("cartItems"))
			: [],
	};
	componentDidMount() {
		this.props.getProducts();
	}
	// sortProductsHandle = (e) => {
	// 	const sortValue = e.target.value;
	// 	this.props.sortProducts(sortValue);
	// 	// products = products.sort((a, b) =>
	// 	// 	sortValue === "Highest"
	// 	// 		? a.price < b.price
	// 	// 			? 1
	// 	// 			: -1
	// 	// 		: sortValue === "Lowest"
	// 	// 		? a.price > b.price
	// 	// 			? 1
	// 	// 			: -1
	// 	// 		: a.id > b.id
	// 	// 		? 1
	// 	// 		: -1
	// 	// );

	// 	this.setState({ sort: sortValue });
	// };
	// filterProductsHandle = (e) => {
	// 	const selectedSize = e.target.value;
	// 	this.props.filterProducts(selectedSize);

	// 	this.setState({ size: selectedSize });
	// };
	filterAndSort=(size,sort)=>{
this.props.filterAndSort(size,sort);
// console.log(size,"       ",sort);
this.setState({size,sort})
	}
	addToCartHandle = (product) => {
		const cartItems = [...this.state.cartItems];
		let alreadyExist = false;
		cartItems.forEach((item) => {
			if (item.id === product.id) {
				item.count++;
				alreadyExist = true;
			}
		});
		if (!alreadyExist) {
			cartItems.push({ ...product, count: 1 });
		}

		console.log("cartItems :>> ", cartItems);

		this.setState({ cartItems });
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	};
	removeFromCartHandle = (product) => {
		let cartItems = [...this.state.cartItems];
		cartItems = cartItems.filter((item) => item.id !== product.id);
		this.setState({ cartItems });
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	};
	orderCreation = (order) => {
		alert("need to save order for " + order.name);
	};
	render() {
        const { size, sort, cartItems } = this.state;
		const { addToCartHandle, removeFromCartHandle, orderCreation } = this;
		const { products } = this.props;
		return (
			<div className="content">
				<div className="main-content">
					{!products? (
						<div style={{ position: "absolute", left: "40%", top: "40%" }}>
							<Loader type="Circles" color="#00BFFF" height={120} width={120} />
						</div>
					) : (
						<div>
							<Filter
								count={products.length}
								size={size}
								sort={sort}
								sortProducts={this.sortProductsHandle}
								filterProducts={this.filterProductsHandle}
								filterAndSort={this.filterAndSort}
							/>

							<Products products={products} addToCart={addToCartHandle} />
						</div>
					)}
				</div>
				<div className="sidebar">
					<Cart
						cartItems={cartItems}
						removeFromCart={removeFromCartHandle}
						orderCreation={orderCreation}
					/>
				</div>
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getProducts: () => dispatch(getAllProducts()),
		filterProducts:(size)=>dispatch(filterProductsBySize(size)),
		sortProducts:(sortValue)=>dispatch(sortProductsByPrice(sortValue)),
		filterAndSort:(size,sort)=>dispatch({type:FILTER_AND_SORT,size,sort})
	};
};
const mapStateToProps = (state) => {
	return {
		products: state.productsReducer.products,
	};
};
Home.defaultProps={
	// products:[]
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

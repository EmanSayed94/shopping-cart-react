import {
	GET_ALL_PRODUCTS,
	FILTER_PRODUCTS_BY_SIZE,
	SORT_PRODUCTS_BY_PRICE,
	FILTER_AND_SORT,
} from "./../actionTypes";
const initialState = {
	products: null,
	allProducts: [],
};

export default (state = initialState, action) => {
	let newState;
	let products = state.allProducts;
	switch (action.type) {
		case GET_ALL_PRODUCTS:
			newState = {
				...state,
				products: action.payload,
				allProducts: action.payload,
			};
			break;
		case FILTER_AND_SORT:
			const { size, sort } = action;
			console.log(size,"From Reducer",sort)
			products =
				size === ""
					? products
					: products.filter((product) =>
							product.availableSizes.includes(size)
					  );
			products = products.sort((a, b) =>
				sort === "Highest"
					? b.price - a.price
					: sort === "Lowest"
					? a.price - b.price
					: a.id > b.id
					? 1
					: -1
			);
			newState = { ...state, products };
			break;
		default:
			newState = state;
			break;
	}
	return newState;
};

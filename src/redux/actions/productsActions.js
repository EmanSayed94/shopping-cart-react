// import { GET_ALL_PRODUCTS } from '../actionTypes';

import axios from "axios"
import { GET_ALL_PRODUCTS ,FILTER_PRODUCTS_BY_SIZE,FILTER_AND_SORT} from "../actionTypes";
import { SORT_PRODUCTS_BY_PRICE } from './../actionTypes';

export const getAllProducts = () => {
	return async (dispatch) => {
		axios
			.get("https://shoppingcart-f1177.firebaseio.com/products.json")
			.then((response) => {
				const products = response.data;
                console.log("FROM ACTION",products);
                const newProducts = [];
                for (const key in products) {
                    newProducts.push({ id: key, ...products[key] });
                }
               dispatch(getAllProductsSucess(newProducts));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
const getAllProductsSucess = (products) => {
	return {
		type: GET_ALL_PRODUCTS,
		payload: products,
	};
};

export const filterProductsBySize=(size)=>{
	return (dispatch)=>{
dispatch({
	type:FILTER_PRODUCTS_BY_SIZE,
	payload:size
})
	}
}

export const sortProductsByPrice=(sortSelcted)=>{
	return (dispatch)=>{
dispatch({
	type:SORT_PRODUCTS_BY_PRICE,
	payload:sortSelcted
})
	}
}
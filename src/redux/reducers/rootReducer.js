import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import authReducer from "./auth"

export default combineReducers({
	productsReducer,
	authReducer
});

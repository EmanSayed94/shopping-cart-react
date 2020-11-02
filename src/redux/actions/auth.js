import axios from "axios";
import * as actionTypes from "../actionTypes";

const authStart = () => {
	return {
		type: actionTypes.AUTH_START,
	};
};

const authSuccess = (authData) => {
	return {
		type: actionTypes.AUTH_SUCESS,
		token: authData.idToken,
		userId: authData.localId,
	};
};

export const auth = (email, password, formType) => {
	return (dispatch) => {
		dispatch(authStart());
		const authData = {
			email,
			password,
			returnSecureToken: true,
		};
		const url =
			formType === "SignUp"
				? "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZcn6TntxjbskJVyc_DAra2cLo1veIe8c"
				: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZcn6TntxjbskJVyc_DAra2cLo1veIe8c";
		axios
			.post(url, authData)
			.then((response) => {
				console.log(response);
				dispatch(authSuccess(response.data));
				dispatch(checkAuthTimeOut(response.data.expiresIn));
			})
			.catch((err) => {
				console.log(err.response);
				dispatch(authFail(err.response.data.error));
			});
	};
};
const authFail = (err) => {
	return {
		type: actionTypes.AUTH_FAIL,
		err,
	};
};

export const logOut = () => {
	return {
		type: actionTypes.AUTH_LOGOUT,
	};
};
export const checkAuthTimeOut = (expireTime) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(logOut());
		}, expireTime * 1000);
	};
};

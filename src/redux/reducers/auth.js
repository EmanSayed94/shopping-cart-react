import * as actionYTypes from "../actionTypes";

const initialState = {
	token: null,
	userId: null,
	error: null,
	loading: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case actionYTypes.AUTH_START:
			return {
				...state,
				error: null,
				loading: true,
			};
		case actionYTypes.AUTH_SUCESS:
			return {
				...state,
				token: action.token,
				userId: action.userId,
				error: null,
				loading: false,
			};
		case actionYTypes.AUTH_FAIL:
			return {
				...state,
                error: action.err,
                loading:false
            };
            case actionYTypes.AUTH_LOGOUT:
                return{
                    ...state,
                    token:null,
                    userId:null
                }
		default:
			return state;
			break;
	}
};

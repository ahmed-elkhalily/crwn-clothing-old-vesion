import actionTypes from "./user.types"
const initialState = {
	user: null,
	error: null,
}
export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SIGNIN_WITH_GOOGLE_SUCCESS:
		case actionTypes.SIGNIN_WITH_EMAIL_SUCCESS:
		case actionTypes.SIGNUP_WITH_EMAIL_SUCCESS:
		case actionTypes.CURRENT_USER_SUCCESS:
			return {
				...state,
				user: action.payload,
				error: null,
			}

		case actionTypes.SIGNIN_WITH_GOOGLE_FAILED:
		case actionTypes.SIGNIN_WITH_EMAIL_FAILED:
		case actionTypes.SIGNUP_WITH_EMAIL_FAILED:
		case actionTypes.CURRENT_USER_FAILURE:
			return {
				...state,
				error: action.payload,
				user: null,
			}
		default:
			return state
	}
}

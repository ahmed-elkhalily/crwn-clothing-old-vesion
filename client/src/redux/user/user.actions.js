import actionTypes from "./user.types"
export const setCurrentUser = (user) => ({
	type: actionTypes.SET_CURRENT_USER,
	payload: user,
})
// Signin with google
export const signinWithGoogleStartAction = () => ({
	type: actionTypes.SIGNIN_WITH_GOOGLE_START,
})

export const signinWithGoogleSuccessAction = (user) => ({
	type: actionTypes.SIGNIN_WITH_GOOGLE_SUCCESS,
	payload: user,
})

export const signinWithGoogleFailedAction = (error) => ({
	type: actionTypes.SIGNIN_WITH_GOOGLE_FAILED,
	payload: error,
})
// Signin with Emil
export const signinWithEmailStartAction = (user) => ({
	type: actionTypes.SIGNIN_WITH_EMAIL_START,
	payload: user,
})

export const signinWithEmailSuccessAction = (user) => ({
	type: actionTypes.SIGNIN_WITH_EMAIL_SUCCESS,
	payload: user,
})

export const signinWithEmailFailedAction = (error) => ({
	type: actionTypes.SIGNIN_WITH_EMAIL_FAILED,
	payload: error.message,
})

export const signupWithEmailAndPasswordStart = (user) => ({
	type: actionTypes.SIGNUP_WITH_EMAIL_START,
	payload: user,
})

export const signupWithEmailAndPasswordSuccess = (user) => ({
	type: actionTypes.SIGNUP_WITH_EMAIL_SUCCESS,
	payload: user,
})

export const signupWithEmailAndPasswordFail = (error) => ({
	type: actionTypes.SIGNUP_WITH_EMAIL_FAILED,
	payload: error,
})

export const currentUserStart = () => ({
	type: actionTypes.CURRENT_USER_START,
})

export const currentUserSuccess = (user) => ({
	type: actionTypes.CURRENT_USER_SUCCESS,
	payload: user,
})

export const currentUserFailure = (error) => ({
	type: actionTypes.CURRENT_USER_FAILURE,
	payload: error,
})

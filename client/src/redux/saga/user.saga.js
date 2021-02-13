import { takeLatest, put } from "redux-saga/effects"
import userActionTypes from "../user/user.types"
import { auth, signinWithGoogle } from "../../firebase/firebase.utils"
import {
	signinWithEmailSuccessAction,
	signinWithEmailFailedAction,
	signinWithGoogleFailedAction,
	signinWithGoogleSuccessAction,
	signupWithEmailAndPasswordFail,
	signupWithEmailAndPasswordSuccess,
	currentUserFailure,
	currentUserSuccess,
} from "../user/user.actions"
import actionTypes from "../user/user.types"

function* signinWithGoogleFetching() {
	try {
		const {
			user: { uid: id, displayName, email },
		} = yield signinWithGoogle()
		yield put(signinWithGoogleSuccessAction({ id, displayName, email }))
	} catch (error) {
		yield put(signinWithGoogleFailedAction(error.message))
	}
}

function* signinWithEmailFetching({ payload }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(
			payload.email,
			payload.password
		)
		const { uid: id, email } = user
		yield put(signinWithEmailSuccessAction({ id, email }))
	} catch (error) {
		yield put(signinWithEmailFailedAction(error))
	}
}

function* signupWithEmailFetching({ payload }) {
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(
			payload.email,
			payload.password
		)
		const { email, uid: id } = user
		yield put(signupWithEmailAndPasswordSuccess({ email, id }))
	} catch (error) {
		yield put(signupWithEmailAndPasswordFail(error))
	}
}

function* currentUserFetching() {
	try {
		let user = yield auth.currentUser
		if (user !== null) {
			const { uid, email } = user
			yield put(currentUserSuccess({ uid, email }))
		} else {
			throw new Error("there's no user signed in !")
		}
	} catch (error) {
		yield put(currentUserFailure(error))
	}
}

export function* signinWithGoogleStart() {
	yield takeLatest(
		userActionTypes.SIGNIN_WITH_GOOGLE_START,
		signinWithGoogleFetching
	)
}

export function* signinWithEmailStart() {
	yield takeLatest(
		userActionTypes.SIGNIN_WITH_EMAIL_START,
		signinWithEmailFetching
	)
}

export function* signupWithEmailStart() {
	yield takeLatest(
		actionTypes.SIGNUP_WITH_EMAIL_START,
		signupWithEmailFetching
	)
}

export function* setCurrentUserStart() {
	yield takeLatest(actionTypes.CURRENT_USER_START, currentUserFetching)
}

import { all, call } from "redux-saga/effects"

import { startFetchingShopData } from "./shop.saga"
import {
	signinWithEmailStart,
	signinWithGoogleStart,
	signupWithEmailStart,
	setCurrentUserStart,
} from "./user.saga"
export default function* rootSaga() {
	yield all([
		call(startFetchingShopData),
		call(signinWithGoogleStart),
		call(signinWithEmailStart),
		call(signupWithEmailStart),
		call(setCurrentUserStart),
	])
}

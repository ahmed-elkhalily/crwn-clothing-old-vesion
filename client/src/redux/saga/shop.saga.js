import { call, put, takeLatest } from "redux-saga/effects"
import { shoptypes } from "../shop/shop.types"
import { firestore, snapShotMapToReduce } from "../../firebase/firebase.utils"
import {
	fetchCollectionSuccess,
	fetchCollectionFailure,
} from "../shop/shop.action"

function* fetchShopDataAsync() {
	const collections = yield firestore.collection("collections").get()
	try {
		// Start Success
		const collectionsData = yield call(snapShotMapToReduce, collections)
		yield put(fetchCollectionSuccess(collectionsData))
	} catch (error) {
		//Fetching fails
		yield put(fetchCollectionFailure(error.message))
	}
}

export function* startFetchingShopData() {
	yield takeLatest(shoptypes.SHOP_COLLECTIONS_START, fetchShopDataAsync)
}

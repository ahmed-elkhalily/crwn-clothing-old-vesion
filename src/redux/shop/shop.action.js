import { shoptypes } from "./shop.types"
import { firestore, snapShotMapToReduce } from "../../firebase/firebase.utils"

export const getCollectionItems = (itemTitle) => ({
	type: shoptypes.SHOP_COLLECTION_ITEMS,
	payload: itemTitle,
})

const fetchCollectionStart = () => ({
	type: shoptypes.SHOP_COLLECTIONS_START,
})

const fetchCollectionSuccess = (collections) => ({
	type: shoptypes.SHOP_COLLECTIONS_SUCCESS,
	payload: collections,
})

const fetchCollectionFailure = (errorMessage) => ({
	type: shoptypes.SHOP_COLLECTIONS_FAILURE,
	payload: errorMessage,
})

export const shopCollectionFetching = (dispatch) => {
	// Start Fetching
	const collections = firestore.collection("collections").get()
	dispatch(fetchCollectionStart)

	//Fetching success
	collections.then((snapShot) =>
		dispatch(fetchCollectionSuccess(snapShotMapToReduce(snapShot)))
	)

	//Fetching fails
	collections.catch((error) =>
		dispatch(fetchCollectionFailure(error.message))
	)
}

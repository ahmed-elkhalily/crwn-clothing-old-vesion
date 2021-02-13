import { shoptypes } from "./shop.types"

export const getCollectionItems = (itemTitle) => ({
	type: shoptypes.SHOP_COLLECTION_ITEMS,
	payload: itemTitle,
})

export const fetchCollectionStart = () => ({
	type: shoptypes.SHOP_COLLECTIONS_START,
	payload: true,
})

export const fetchCollectionSuccess = (collections) => ({
	type: shoptypes.SHOP_COLLECTIONS_SUCCESS,
	payload: collections,
})

export const fetchCollectionFailure = (errorMessage) => ({
	type: shoptypes.SHOP_COLLECTIONS_FAILURE,
	payload: errorMessage,
})

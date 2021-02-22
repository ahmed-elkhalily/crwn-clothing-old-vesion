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
export const fetchCollectionItemsStart = (collectionTitle) => ({
	type: shoptypes.SHOP_COLLECTION_ITEMS_START,
	payload: collectionTitle,
})

export const fetchCollectionItemsSuccess = (collection) => ({
	type: shoptypes.SHOP_COLLECTION_ITEMS_SUCCESS,
	payload: collection,
})

export const fetchCollectionItemsFailure = (errorMessage) => ({
	type: shoptypes.SHOP_COLLECTION_ITEMS_FAILURE,
	payload: errorMessage,
})

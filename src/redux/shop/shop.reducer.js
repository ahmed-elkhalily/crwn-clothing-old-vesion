import { shoptypes } from "./shop.types"

const initialShopState = {
	collections: {},
	isFetching: false,
	error: null,
}

export const getShopCollectionReducer = (state = initialShopState, action) => {
	switch (action.type) {
		case shoptypes.SHOP_COLLECTIONS_START:
			return {
				...state,
				isFetching: action.payload,
			}

		case shoptypes.SHOP_COLLECTIONS_SUCCESS:
			return {
				...state,
				isFetching: false,
				collections: action.payload,
			}

		case shoptypes.SHOP_COLLECTIONS_FAILURE:
			return {
				...state,
				error: action.payload,
			}
		default:
			return state
	}
}

import shopData from "./shopdata"
import { shoptypes } from "./shop.types"

const initialShopState = {
    collections: {},
}

export const getShopCollectionReducer = (state = initialShopState, action) => {
    switch (action.type) {
        case shoptypes.SHOP_COLLECTIONS:
            return {
                ...state,
                collections: action.payload,
            }

        default:
            return state
    }
}

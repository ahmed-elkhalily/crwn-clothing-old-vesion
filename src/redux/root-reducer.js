import { combineReducers } from "redux"
import { userReducer } from "./user/user.reducers"
import { cartShowReducer, addCartItemReducer } from "./cart/cart.reducer"
import { getShopCollectionReducer } from "./shop/shop.reducer"
import { directoryHomeData } from "./directory/directory.reducer"

export default combineReducers({
    user: userReducer,
    cartPreview: cartShowReducer,
    cartItems: addCartItemReducer,
    shopCollections: getShopCollectionReducer,
    directoryData: directoryHomeData,
})

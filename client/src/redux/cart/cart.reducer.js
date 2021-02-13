import cartActions from "./cart.types"
import { cartItemsReturn, quantity, removeItem } from "./cart.utils"

const initial_hidden = {
    hidden: false,
    cartItems: [],
}

export const cartShowReducer = (state = initial_hidden.hidden, action) => {
    switch (action.type) {
        case cartActions.CART_PREVIEW:
            return { ...state, hidden: !state.hidden }
        default:
            return state
    }
}

export const addCartItemReducer = (
    state = initial_hidden.cartItems,
    action
) => {
    switch (action.type) {
        case cartActions.ADD_TO_CART:
            return cartItemsReturn(state, action.payload)

        case cartActions.REMOVE_ITEM_FROM_CART:
            return removeItem(state, action)

        case cartActions.INCREASE_ITEM_QUANTITY:
            return quantity(state, action)

        case cartActions.DECREASE_ITEM_QUANTITY:
            return quantity(state, action)

        default:
            return state
    }
}

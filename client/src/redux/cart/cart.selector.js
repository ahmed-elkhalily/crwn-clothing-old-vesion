import { createSelector } from "reselect"
const cartItemsSelector = (state) => state.cartItems
const cartPreviewSelector = (state) => state.cartPreview

export const selectCartItems = createSelector(
    [cartItemsSelector],
    (cartItems) => cartItems
)
export const changeCartHidden = createSelector(
    [cartPreviewSelector],
    (cartPreview) => cartPreview.hidden
)
export const totalCheckout = createSelector([cartItemsSelector], (cartItems) =>
    cartItems.reduce(
        (accumilator, item) => accumilator + item.price * item.quantity,
        0
    )
)

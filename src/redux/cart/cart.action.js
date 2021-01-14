import cartActions from "./cart.types"

export const cartPreviewAction = () => ({
    type: cartActions.CART_PREVIEW,
})

export const addCartItem = (item) => ({
    type: cartActions.ADD_TO_CART,
    payload: item,
})

export const removeItemFromCart = (itemId) => ({
    type: cartActions.REMOVE_ITEM_FROM_CART,
    payload: itemId,
})

export const increaseQuantity = (itemId) => ({
    type: cartActions.INCREASE_ITEM_QUANTITY,
    payload: itemId,
})

export const decreaseQuantity = (itemId) => ({
    type: cartActions.DECREASE_ITEM_QUANTITY,
    payload: itemId,
})

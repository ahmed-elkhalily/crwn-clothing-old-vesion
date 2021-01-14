import cartActions from "./cart.types"
import cartAction from "./cart.types"

export const cartItemsReturn = (state, payload) => {
    const ele = state.find((item) => item.id === payload.id)
    if (ele && ele.quantity) {
        ele.quantity += 1
        return [...state]
    } else {
        payload.quantity = 1
        return [...state, payload]
    }
}

export const removeItem = (state, action) => {
    return state.filter((item) => item.id !== action.payload)
}

export const quantity = (state, action) => {
    const { type, payload } = action
    const eleById = state.findIndex((item) => item.id === payload)
    let newArr = [...state]

    switch (type) {
        case cartActions.INCREASE_ITEM_QUANTITY:
            newArr[eleById] = {
                ...newArr[eleById],
                quantity: (newArr[eleById].quantity += 1),
            }
            break

        case cartAction.DECREASE_ITEM_QUANTITY:
            newArr[eleById] = {
                ...newArr[eleById],
                quantity: (newArr[eleById].quantity -= 1),
            }
            break
        default:
            return newArr
    }

    return newArr
}

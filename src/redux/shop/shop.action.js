import { shoptypes } from "./shop.types"

export const getCollectionItems = (itemTitle) => ({
    type: shoptypes.SHOP_COLLECTION_ITEMS,
    payload: itemTitle,
})

export const shopCollectionsAction = (collections) => ({
    type: shoptypes.SHOP_COLLECTIONS,
    payload: collections,
})

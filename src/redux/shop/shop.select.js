import { createSelector } from "reselect"

const shopCollectionsSelector = (state) => state.shopCollections

const collections = createSelector(
    [shopCollectionsSelector],
    (shopCollections) => shopCollections.collections
)

export const shopCollections = createSelector([collections], (collections) =>
    Object.keys(collections).map((key) => collections[key])
)

export const collectionData = (collectionUrlParams) =>
    createSelector(
        [collections],
        (collections) => collections[collectionUrlParams]
    )

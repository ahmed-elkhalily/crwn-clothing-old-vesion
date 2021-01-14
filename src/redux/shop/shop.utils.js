import shopData from "./shopdata"

export const collectionItemsForShop = (state) => {
    let arr = []
    for (const item in shopData) {
        const data = shopData[item].items.filter((item, i) => i < 4)
        const { title, routeName } = shopData[item]
        arr.push({ title, routeName, items: data })
    }
    return arr
}

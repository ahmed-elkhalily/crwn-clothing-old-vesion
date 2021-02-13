import {
    CartItemStyle,
    ItemDetailsStyle,
    Name,
    Image,
} from "./Cart-item.style.jsx"
const CartItem = ({ item }) => {
    const { name, imageUrl, price, quantity } = item
    return (
        <CartItemStyle>
            <Image src={imageUrl} alt={name} />
            <ItemDetailsStyle>
                <Name>{name}</Name>
                <div className="price">
                    {quantity} x $ {price}
                </div>
            </ItemDetailsStyle>
        </CartItemStyle>
    )
}
export default CartItem

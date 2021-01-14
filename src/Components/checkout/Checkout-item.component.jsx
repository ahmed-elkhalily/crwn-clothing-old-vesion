import {
    CheckoutItemStyle,
    ImageContainer,
    Image,
    Name,
    Quantity,
    Price,
    RemoveBtn,
} from "./Checkout-item.style.jsx"
import {
    removeItemFromCart,
    increaseQuantity,
    decreaseQuantity,
} from "../../redux/cart/cart.action.js"
import { connect } from "react-redux"

const CheckItem = ({
    item,
    removeItemFromCart,
    increaseQuantity,
    decreaseQuantity,
}) => {
    console.log(item)
    const { id, imageUrl, price, quantity, name } = item
    return (
        <CheckoutItemStyle>
            <ImageContainer>
                <Image alt={name} src={imageUrl} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <span
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                        quantity <= 1
                            ? removeItemFromCart(id)
                            : decreaseQuantity(id)
                    }
                >
                    &lt;
                </span>
                <span style={{ margin: "0 10px" }}>{quantity}</span>
                <span
                    style={{ cursor: "pointer" }}
                    onClick={() => increaseQuantity(id)}
                >
                    &gt;
                </span>
            </Quantity>
            <Price>$ {price}</Price>
            <RemoveBtn onClick={() => removeItemFromCart(id)}>
                &#10005;
            </RemoveBtn>
        </CheckoutItemStyle>
    )
}

const mapDispatchToProps = (dispatch) => ({
    removeItemFromCart: (itemId) => dispatch(removeItemFromCart(itemId)),
    increaseQuantity: (itemId) => dispatch(increaseQuantity(itemId)),
    decreaseQuantity: (itemId) => dispatch(decreaseQuantity(itemId)),
})
export default connect(null, mapDispatchToProps)(CheckItem)

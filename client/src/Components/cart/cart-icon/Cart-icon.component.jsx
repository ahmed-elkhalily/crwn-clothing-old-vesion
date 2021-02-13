import { connect } from "react-redux"
import { cartPreviewAction } from "../../../redux/cart/cart.action"
import { CartIconStyle, ShoppingIcon, ItemCount } from "./Cart-icon.styled.jsx"

const CartIcon = ({ cartPreviewAction, totalItems }) => {
    return (
        <CartIconStyle onClick={cartPreviewAction}>
            <ShoppingIcon />
            <ItemCount>{totalItems}</ItemCount>
        </CartIconStyle>
    )
}
const mapStateToProps = ({ cartItems }) => {
    return {
        totalItems: cartItems.reduce(
            (accumilator, currentVal) => accumilator + currentVal.quantity,
            0
        ),
    }
}
const mapDispatchToProps = (dispatch) => ({
    cartPreviewAction: () => dispatch(cartPreviewAction()),
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)

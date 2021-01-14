import { CartDropdownStyle, CartItemsStyle } from "./Cart-dropdown.style.jsx"
import CartItem from "../cart-item/Cart-item.component"
import { connect } from "react-redux"
import Button from "../../Button/Button-component"
import { selectCartItems } from "../../../redux/cart/cart.selector.js"
import { withRouter } from "react-router-dom"

const CartDropdown = (props) => {
    return (
        <CartDropdownStyle
            style={{
                display: props.hidden ? "flex" : "none",
            }}
        >
            <CartItemsStyle
                style={{
                    overflowY: props.cartItems.length > 2 ? "scroll" : "hidden",
                }}
            >
                {props.cartItems.map((item) => (
                    <CartItem item={item} key={item.id} />
                ))}
            </CartItemsStyle>
            <Button
                style={{
                    marginTop: "auto",
                }}
                inverted
                onClickEvent={() => props.history.push("/checkout")}
            >
                checkout list
            </Button>
        </CartDropdownStyle>
    )
}

const mapStateToProps = (state) => {
    return { cartItems: selectCartItems(state) }
}
export default withRouter(connect(mapStateToProps)(CartDropdown))

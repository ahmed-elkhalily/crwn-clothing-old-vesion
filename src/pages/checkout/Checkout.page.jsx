import {
    CheckoutPageStyle,
    CheckoutHeader,
    HeaderBlock,
    Total,
} from "./checkout.style"
import CheckoutItem from "../../Components/checkout/Checkout-item.component"
import { connect } from "react-redux"

import { createStructuredSelector } from "reselect"
import {
    selectCartItems,
    totalCheckout,
} from "../../redux/cart/cart.selector.js"

import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import CheckoutForm from "./checkout-form/Checkout-form.component"

const stripePromise = loadStripe(
    "pk_test_51I6b5GA8t7b9yqLiwZQuCDtnsG0pRHwL6UeQ0tJ5BoYR1zKotJs9HluJvtl2ssO2ZhEGulcdqWgygnhIirCbp7BT00P586v13Y"
)
const CheckoutPage = ({ cartItems, total }) => {
    return (
        <CheckoutPageStyle>
            <CheckoutHeader>
                <HeaderBlock>Product</HeaderBlock>
                <HeaderBlock>Description</HeaderBlock>
                <HeaderBlock>Quantity</HeaderBlock>
                <HeaderBlock>Price</HeaderBlock>
                <HeaderBlock>Remove</HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((item) => (
                <CheckoutItem item={item} key={item.id} />
            ))}
            <Total>
                <span>total: $ {total}</span>
            </Total>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </CheckoutPageStyle>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: totalCheckout,
})

export default connect(mapStateToProps, null)(CheckoutPage)

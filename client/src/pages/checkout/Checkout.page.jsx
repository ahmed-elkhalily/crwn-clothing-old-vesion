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
// stripe setting
import StripeCheckoutComponent from "./stripecheckout/Stripe.component"

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
			<StripeCheckoutComponent price={total} />
		</CheckoutPageStyle>
	)
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: totalCheckout,
})

export default connect(mapStateToProps, null)(CheckoutPage)

import StripeCheckout from "react-stripe-checkout"
import logo from "../../../assets/crown.svg"

// li:has(> a.active)
const StripeCheckoutComponent = ({ price }) => {
	const stripeKey =
		"pk_test_51I6b5GA8t7b9yqLiwZQuCDtnsG0pRHwL6UeQ0tJ5BoYR1zKotJs9HluJvtl2ssO2ZhEGulcdqWgygnhIirCbp7BT00P586v13Y"

	const token = (token) => {
		console.log(token)
		alert("payment success")
	}
	return (
		<StripeCheckout
			name="crown clothing cli."
			description="we didn't share your data :)"
			image={logo}
			label="check-out"
			currency="USD"
			token={token}
			amount={price}
			stripeKey={stripeKey}
			shippingAddress
			billingAddress
			style={{
				marginTop: "50px",
				marginBottom: "10px",
			}}
		></StripeCheckout>
	)
}

export default StripeCheckoutComponent

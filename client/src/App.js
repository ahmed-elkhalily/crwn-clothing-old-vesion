import { Component } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Home from "./pages/Home/Home.page"
import Shop from "./pages/Shop/Shop.page"
import Header from "./Components/Header/Header.component"
import CartDropdown from "./Components/cart/cart-dropdown/Cart-dropdown.component"
import Signin from "./pages/Signup/Signin.page"
import { changeCartHidden } from "./redux/cart/cart.selector"
import { connect } from "react-redux"
import CheckoutPage from "./pages/checkout/Checkout.page"
import { currentUserStart } from "./redux/user/user.actions"
import { fetchCollectionStart } from "./redux/shop/shop.action"

class App extends Component {
	componentDidMount() {
		this.props.setCurrentUser()
		this.props.fetchCollectionStart()
	}

	render() {
		return (
			<div className="home">
				<Header signedIn={this.props.user} />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/shop" component={Shop} />
					<Route
						exact
						path="/signin"
						render={() => (this.props.user ? <Redirect to="/" /> : <Signin />)}
					/>
					<Route path="/checkout" component={CheckoutPage} />
				</Switch>
				<CartDropdown hidden={this.props.hidden} />
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		user: state.user.user,
		hidden: changeCartHidden(state),
	}
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: () => dispatch(currentUserStart()),
	fetchCollectionStart: () => dispatch(fetchCollectionStart()),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)

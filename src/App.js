import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Home from "./pages/Home/Home.page"
import Shop from "./pages/Shop/Shop.page"
import Header from "./Components/Header/Header.component"
import CartDropdown from "./Components/cart/cart-dropdown/Cart-dropdown.component"
import Signin from "./pages/Signup/Signin.page"
import { changeCartHidden } from "./redux/cart/cart.selector"
import { auth, getUser } from "./firebase/firebase.utils"
import { connect } from "react-redux"
import { setCurrentUser } from "./redux/user/user.actions"
import CheckoutPage from "./pages/checkout/Checkout.page"

class App extends React.Component {
    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                let { uid: id, displayName, email } = user
                getUser(id, { displayName, email })
            }
            this.props.setCurrentUserAction(user)
        })
    }

    render() {
        return (
            <div className="home">
                <Header signedIn={this.props.currentUser} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/shop" component={Shop} />
                    <Route
                        exact
                        path="/signin"
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <Signin />
                            )
                        }
                    />
                    <Route path="/checkout" component={CheckoutPage} />
                </Switch>
                <CartDropdown hidden={this.props.hidden} />
            </div>
        )
    }
}

const mapDispathToProps = (dispatch) => ({
    setCurrentUserAction: (user) => dispatch(setCurrentUser(user)),
})

const mapStateToProps = (state) => {
    return {
        ...state.user.currentUser,
        hidden: changeCartHidden(state),
    }
}
export default connect(mapStateToProps, mapDispathToProps)(App)

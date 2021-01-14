import {
    HeaderStyled,
    LogoContainer,
    Options,
    Option,
} from "./Header.style.jsx"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import CartIcon from "../cart/cart-icon/Cart-icon.component"
import { auth } from "../../firebase/firebase.utils"

const Header = (props) => {
    return (
        <HeaderStyled>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <Options>
                <Option to="/shop">shop</Option>
                <Option to="/shop">Contact</Option>

                {props.signedIn ? (
                    <Option onClick={() => auth.signOut()}>sign-out</Option>
                ) : (
                    <Option to="/signin">sign-in</Option>
                )}
                <Option onClick={props.cartPreviewAction}>
                    <CartIcon />
                </Option>
            </Options>
        </HeaderStyled>
    )
}

export default Header

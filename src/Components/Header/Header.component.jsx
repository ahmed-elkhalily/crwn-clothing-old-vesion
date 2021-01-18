import {
	HeaderStyled,
	LogoContainer,
	Options,
	Option,
	OptionBtn,
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
					<OptionBtn onClick={() => auth.signOut()}>
						sign-out
					</OptionBtn>
				) : (
					<Option to="/signin">sign-in</Option>
				)}
				<OptionBtn onClick={props.cartPreviewAction}>
					<CartIcon />
				</OptionBtn>
			</Options>
		</HeaderStyled>
	)
}

export default Header

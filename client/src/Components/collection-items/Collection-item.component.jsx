import "./Collection-item.style.jsx"
import { connect } from "react-redux"
import Button from "../Button/Button-component"
import { addCartItem } from "../../redux/cart/cart.action"
import {
	CollectionItemStyled,
	Image,
	CollectionFooter,
	Name,
	Price,
} from "./Collection-item.style"
const CollectionItems = ({ item, addCartItemAction }) => {
	const { imageUrl, name, price } = item
	return (
		<CollectionItemStyled>
			<Image
				style={{
					backgroundImage: `url(${imageUrl})`,
					width: "250px",
					height: "350px",
				}}
			></Image>

			<CollectionFooter>
				<Name>{name}</Name>
				<Price>$ {price}</Price>
			</CollectionFooter>

			<Button
				style={{
					width: "80%",
					opacity: "0.7",
					position: "absolute",
					top: 255,
				}}
				inverted
				onClickEvent={() => addCartItemAction(item)}
			>
				add to cart
			</Button>
		</CollectionItemStyled>
	)
}

const mapDisPatchToProps = (dispatch) => ({
	addCartItemAction: (item) => dispatch(addCartItem(item)),
})

export default connect(null, mapDisPatchToProps)(CollectionItems)

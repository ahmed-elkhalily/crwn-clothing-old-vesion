import "./Collection-item.style.jsx"
import { connect } from "react-redux"
import { addCartItem } from "../../redux/cart/cart.action"
import {
    CollectionItemStyled,
    Image,
    CollectionFooter,
    Name,
    Price,
    CustomBtn,
} from "./Collection-item.style"
const CollectionItems = ({ item, addCartItemAction }) => {
    const { imageUrl, name, price } = item
    return (
        <CollectionItemStyled>
            <Image
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    width: 290,
                    height: 350,
                }}
            ></Image>

            <CollectionFooter>
                <Name>{name}</Name>
                <Price>$ {price}</Price>
            </CollectionFooter>
            <CustomBtn inverted onClickEvent={() => addCartItemAction(item)}>
                add to cart
            </CustomBtn>
        </CollectionItemStyled>
    )
}

const mapDisPatchToProps = (dispatch) => ({
    addCartItemAction: (item) => dispatch(addCartItem(item)),
})

export default connect(null, mapDisPatchToProps)(CollectionItems)

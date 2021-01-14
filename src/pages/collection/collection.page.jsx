import { connect } from "react-redux"
import CollectionItem from "../../Components/collection-items/Collection-item.component"
import "./collection.styles.jsx"
import { collectionData } from "../../redux/shop/shop.select.js"
import { CollectionPageStyle, Items, Title } from "./collection.styles.jsx"

const CollectionPage = ({ collectionData: { title, items } }) => {
    return (
        <CollectionPageStyle>
            <Title>{title}</Title>
            <Items>
                {items.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </Items>
        </CollectionPageStyle>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return {
        collectionData: collectionData(ownProps.params.collectionId)(state),
    }
}

export default connect(mapStateToProps)(CollectionPage)

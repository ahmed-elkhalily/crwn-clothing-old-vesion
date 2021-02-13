import {
    CollectionPreviewStyled,
    Title,
    Preview,
} from "./collection-preview.style.jsx"
import CollectionItems from "../collection-items/Collection-item.component"
import { withRouter } from "react-router-dom"

const CollectionPreview = ({ collection, history }) => {
    const { title, items } = collection
    return (
        <CollectionPreviewStyled>
            <Title onClick={() => history.push(`/shop/${title.toLowerCase()}`)}>
                {title.toUpperCase()}
            </Title>
            <Preview>
                {items
                    .filter((item, id) => id < 4)
                    .map((item) => (
                        <CollectionItems key={item.id} item={item} />
                    ))}
            </Preview>
        </CollectionPreviewStyled>
    )
}

export default withRouter(CollectionPreview)

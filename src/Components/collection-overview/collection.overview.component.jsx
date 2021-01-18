import CollectionPreview from "../collection-preview/collection-preview.component"
import { connect } from "react-redux"
import { shopCollections } from "../../redux/shop/shop.select.js"
import { Component } from "react"

class CollectionOverview extends Component {
	render() {
		const { shopCollections } = this.props
		return (
			<>
				{shopCollections.map((collection) => {
					return (
						<CollectionPreview
							key={collection.id}
							collection={collection}
						/>
					)
				})}
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	shopCollections: shopCollections(state),
})

export default connect(mapStateToProps)(CollectionOverview)

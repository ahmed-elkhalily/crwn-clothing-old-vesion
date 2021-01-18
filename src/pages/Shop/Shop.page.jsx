import CollectionOverview from "../../Components/collection-overview/collection.overview.component"
import { Switch, Route } from "react-router-dom"
import collectionPage from "../collection/collection.page"
import { Component } from "react"
import { firestore } from "../../firebase/firebase.utils"
import { shopCollectionsAction } from "../../redux/shop/shop.action.js"
import { connect } from "react-redux"
import SpinnerComponent from "../../Components/spinner/spinner.component"

const CollectionOverviewWithSpinner = SpinnerComponent(CollectionOverview)
const CollectionPageWithSpinner = SpinnerComponent(collectionPage)

class Shop extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoadingData: true,
		}
	}

	componentDidMount() {
		firestore.collection("collections").onSnapshot(
			(snapShot) => {
				let shopCollections = {}

				snapShot.docs.map((doc) => {
					shopCollections[doc.data().title.toLowerCase()] = doc.data()
					return null
				})

				this.props.addShopCollectionsToRed(shopCollections)
				this.setState({ isLoadingData: false })
			},
			(err) => console.log("error: ", err)
		)
	}

	render() {
		const { match } = this.props
		return (
			<div className="shop-page">
				<div className="container">
					<Switch>
						<Route
							exact
							path={`${match.path}`}
							render={() =>
								CollectionOverviewWithSpinner(
									this.state.isLoadingData,
									match
								)
							}
						/>
						<Route
							exact
							path={`${match.path}/:collectionId`}
							render={({ match }) =>
								CollectionPageWithSpinner(
									this.state.isLoadingData,
									match
								)
							}
						/>
					</Switch>
				</div>
			</div>
		)
	}
}
const mapDispatchToProps = (dispatch) => ({
	addShopCollectionsToRed: (shopCollections) =>
		dispatch(shopCollectionsAction(shopCollections)),
})

export default connect(null, mapDispatchToProps)(Shop)

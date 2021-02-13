import CollectionOverview from "../../Components/collection-overview/collection.overview.component"
import { Switch, Route } from "react-router-dom"
import collectionPage from "../collection/collection.page"
import { Component } from "react"
import { fetchCollectionStart } from "../../redux/shop/shop.action.js"
import { connect } from "react-redux"
import SpinnerComponent from "../../Components/spinner/spinner.component"

const CollectionOverviewWithSpinner = SpinnerComponent(CollectionOverview)
const CollectionPageWithSpinner = SpinnerComponent(collectionPage)

class Shop extends Component {
	componentDidMount() {
		const { fetchCollections } = this.props
		fetchCollections()
	}

	render() {
		const { match, isFetching } = this.props
		return (
			<div className="shop-page">
				<div className="container">
					<Switch>
						<Route
							exact
							path={`${match.path}`}
							render={() =>
								CollectionOverviewWithSpinner(isFetching, match)
							}
						/>
						<Route
							exact
							path={`${match.path}/:collectionId`}
							render={({ match }) =>
								CollectionPageWithSpinner(isFetching, match)
							}
						/>
					</Switch>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchCollections: () => dispatch(fetchCollectionStart()),
})

const mapStateToProps = (state) => ({
	isFetching: state.shopCollections.isFetching,
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop)

import "./Home.style.jsx"
import Directory from "../../Components/Directory/Directory.component"
import { useEffect } from "react"
import { connect } from "react-redux"
import { HomePageStyle } from "./Home.style.jsx"
import { fetchCollectionStart } from "../../redux/shop/shop.action.js"
const Home = ({ fetchCollectionStart }) => {
	return (
		<HomePageStyle>
			<Directory />
		</HomePageStyle>
	)
}
const mapDispatchToProps = (dispatch) => ({
	fetchCollectionStart: () => dispatch(fetchCollectionStart()),
})
export default connect(null, mapDispatchToProps)(Home)

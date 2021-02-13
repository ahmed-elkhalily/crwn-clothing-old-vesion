import {
	CatContainer,
	Cat,
	CatImg,
	CatTitle,
	CatHeader,
	CatSpan,
} from "./Menu.style.jsx"
import { withRouter } from "react-router-dom"

const Menu = ({ title, imageUrl, size, history, match, linkUrl }) => {
	return (
		<CatContainer className={`${size}`}>
			<Cat>
				<CatImg
					style={{
						backgroundImage: `url(${imageUrl})`,
					}}
				></CatImg>
				<CatHeader onClick={() => history.push(`/shop/${linkUrl}`)}>
					<CatTitle>{title.toUpperCase()}</CatTitle>
					<CatSpan>Shop Now</CatSpan>
				</CatHeader>
			</Cat>
		</CatContainer>
	)
}
export default withRouter(Menu)

import Menu from "../Menu/Menu.Component"
import { connect } from "react-redux"
import { directoryData } from "../../redux/directory/directory.selector.js"
import { DirectoryMenu } from "./Directory.styled"

const Directory = ({ sections }) => {
    return (
        <DirectoryMenu>
            {sections.map(({ id, ...otherProps }) => (
                <Menu key={id} {...otherProps} />
            ))}
        </DirectoryMenu>
    )
}

const mapStateToProps = (state) => ({
    sections: directoryData(state),
})

export default connect(mapStateToProps)(Directory)

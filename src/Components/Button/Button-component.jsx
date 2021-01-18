import { CustomBtnGlobal } from "./Button.style"
const Button = ({ children, onClickEvent, googleSignin, inverted, style }) => {
	return (
		<CustomBtnGlobal
			className={`${googleSignin ? "google-sign-in" : ""} ${
				inverted ? "inverted" : ""
			}`}
			onClick={() => {
				onClickEvent()
			}}
			style={style}
		>
			{children}
		</CustomBtnGlobal>
	)
}
export default Button

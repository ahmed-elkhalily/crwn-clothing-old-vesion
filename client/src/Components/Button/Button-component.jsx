import { CustomBtnGlobal } from "./Button.style"
const Button = ({
	children,
	onClickEvent,
	googleSignin,
	inverted,
	style,
	type,
}) => {
	return (
		<CustomBtnGlobal
			className={`${googleSignin ? "google-sign-in" : ""} ${
				inverted ? "inverted" : ""
			}`}
			onClick={() => (onClickEvent ? onClickEvent() : null)}
			type={type}
			style={style}
		>
			{children}
		</CustomBtnGlobal>
	)
}
export default Button

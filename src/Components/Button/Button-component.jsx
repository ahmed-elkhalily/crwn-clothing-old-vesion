import { CustomBtn } from "./Button.style"
const Button = ({ children, onClickEvent, googleSignin, inverted, style }) => {
    return (
        <CustomBtn
            className={`${googleSignin ? "google-sign-in" : ""} ${
                inverted ? "inverted" : ""
            }`}
            onClick={() => {
                onClickEvent()
            }}
            style={style}
        >
            {children}
        </CustomBtn>
    )
}
export default Button

import { Component } from "react"
import FormField from "../Form-field/Form-field.component"
import Button from "../Button/Button-component"
import { SigninForm, Title, BtnContainer } from "./signin.component.style"
import { connect } from "react-redux"
import {
	signinWithGoogleStartAction,
	signinWithEmailStartAction,
} from "../../redux/user/user.actions.js"

class Signin extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: "",
			password: "",
		}
	}

	onChangeHandler(e) {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	onSubmitHandler(e) {
		e.preventDefault()
		const { signinWithEmail } = this.props
		const { email, password } = this.state
		signinWithEmail({ email, password })
	}

	render() {
		const { signinWithGoogle } = this.props
		return (
			<SigninForm>
				<Title>
					<h2>I already have an account</h2>
					<span>with your email and password</span>
				</Title>
				<form onSubmit={(e) => this.onSubmitHandler(e)}>
					<FormField
						onChangeHandler={(event) => this.onChangeHandler(event)}
						name="email"
						value={this.state.email}
						type="email"
						label="email"
					/>
					<FormField
						onChangeHandler={(event) => this.onChangeHandler(event)}
						name="password"
						value={this.state.password}
						type="password"
						label="password"
					/>
					<BtnContainer>
						<Button type="submit" inverted>
							signin
						</Button>
						<Button
							type="button"
							onClickEvent={signinWithGoogle}
							googleSignin
						>
							signin with google
						</Button>
					</BtnContainer>
				</form>
			</SigninForm>
		)
	}
}
const mapDispatchToProps = (dispatch) => ({
	signinWithGoogle: () => dispatch(signinWithGoogleStartAction()),
	signinWithEmail: (user) => dispatch(signinWithEmailStartAction(user)),
})

export default connect(null, mapDispatchToProps)(Signin)

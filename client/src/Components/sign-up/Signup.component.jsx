import { Component } from "react"
import { Title, SignupForm, BtnContainer } from "./Signup.style"
import FormField from "../Form-field/Form-field.component"
import Button from "../Button/Button-component"
import { signupWithEmailAndPasswordStart } from "../../redux/user/user.actions.js"
import { connect } from "react-redux"

export class Signup extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		}
	}

	onChangeHandler(e) {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	signupFun(e) {
		const { signupWithEmailAndPassword } = this.props
		const { name, email, password, confirmPassword } = this.state
		e.preventDefault()
		// createUserByEmail(name, email, password, confirmPassword)
		// 	.then((success) => console.log(success))
		// 	.catch((err) => Error(err.message))
		console.log("hi there")
		if (password === confirmPassword)
			signupWithEmailAndPassword({ email, password })
		else console.log("password must equal confirm password")
	}
	render() {
		return (
			<SignupForm>
				<Title>
					<h2>I do not have a account</h2>
					<span>Sign up with your email and password</span>
				</Title>
				<form action="" onSubmit={(e) => this.signupFun(e)}>
					<FormField
						onChangeHandler={(event) => this.onChangeHandler(event)}
						value={this.state.name}
						name="name"
						type="text"
						label="displayname"
					/>
					<FormField
						onChangeHandler={(event) => this.onChangeHandler(event)}
						value={this.state.email}
						name="email"
						type="email"
						label="email"
					/>
					<FormField
						onChangeHandler={(event) => this.onChangeHandler(event)}
						value={this.state.password}
						name="password"
						type="password"
						label="password"
					/>
					<FormField
						onChangeHandler={(event) => this.onChangeHandler(event)}
						value={this.state.confirmPassword}
						name="confirmPassword"
						type="password"
						label="confirmPassword"
					/>
					<BtnContainer>
						<Button
							onClickEvent={() => null}
							type="submit"
							style={{
								marginLeft: "auto",
							}}
							inverted
						>
							signup
						</Button>
					</BtnContainer>
				</form>
			</SignupForm>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	signupWithEmailAndPassword: (user) =>
		dispatch(signupWithEmailAndPasswordStart(user)),
})

export default connect(null, mapDispatchToProps)(Signup)

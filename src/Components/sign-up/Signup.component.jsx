import { Component } from "react"
import { Title, SignupForm, BtnContainer } from "./Signup.style"
import FormField from "../../Components/Form-field/Form-field.component"
import Button from "../../Components/Button/Button-component"
import { createUserByEmail } from "../../firebase/firebase.utils"

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
		const { name, email, password, confirmPassword } = this.state
		e.preventDefault()
		createUserByEmail(name, email, password, confirmPassword)
			.then((success) => console.log(success))
			.catch((err) => Error(err.message))
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

export default Signup

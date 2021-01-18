import { Component } from "react"
import FormField from "../Form-field/Form-field.component"
import Button from "../Button/Button-component"
import { signinWithGoogle } from "../../firebase/firebase.utils"
import { SigninForm, Title, BtnContainer } from "./signin.component.style"
import { signinWithEmailAndPassword } from "../../firebase/firebase.utils.js"

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
		console.log("hi there", this.state)
	}

	onSubmitHandler(e) {
		e.preventDefault()
		const { email, password } = this.state
		signinWithEmailAndPassword(email, password)
	}

	render() {
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
						<Button
							onClickEvent={() => console.log("not yet")}
							type="submit"
							inverted
						>
							signin
						</Button>
						<Button onClickEvent={signinWithGoogle} googleSignin>
							signin with google
						</Button>
					</BtnContainer>
				</form>
			</SigninForm>
		)
	}
}
export default Signin

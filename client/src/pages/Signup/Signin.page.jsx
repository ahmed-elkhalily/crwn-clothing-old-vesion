import React from "react"
import "./Signup.style.jsx"
import Signin from "../../Components/sign-in/signin.component"
import Signup from "../../Components/sign-up/Signup.component"
import { SigninSignupPage } from "./Signup.style"

class SignInUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
        }
    }

    render() {
        return (
            <SigninSignupPage>
                <Signin />
                <Signup />
            </SigninSignupPage>
        )
    }
}

export default SignInUp

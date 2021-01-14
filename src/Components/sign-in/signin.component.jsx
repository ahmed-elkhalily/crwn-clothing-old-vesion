import { Component } from "react"
import FormField from "../Form-field/Form-field.component"
import Button from "../Button/Button-component"
import { signinWithGoogle } from "../../firebase/firebase.utils"
import { SigninForm, Title, BtnContainer } from "./signin.component.style"

class Signin extends Component {
    render() {
        return (
            <SigninForm>
                <Title>
                    <h2>I already have an account</h2>
                    <span>with your email and password</span>
                </Title>
                <form action="" onClick={(e) => e.preventDefault()}>
                    <FormField type="email" label="email" />
                    <FormField type="password" label="password" />
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

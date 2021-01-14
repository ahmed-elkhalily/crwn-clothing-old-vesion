import { Component } from "react"
import { Title, SignupForm, BtnContainer } from "./Signup.style"
import FormField from "../../Components/Form-field/Form-field.component"
import Button from "../../Components/Button/Button-component"

export class Signup extends Component {
    render() {
        return (
            <SignupForm>
                <Title>
                    <h2>I do not have a account</h2>
                    <span>Sign up with your email and password</span>
                </Title>
                <form action="" onClick={(e) => e.preventDefault()}>
                    <FormField type="name" label="displayname" />
                    <FormField type="email" label="email" />
                    <FormField type="password" label="password" />
                    <FormField type="password" label="confirmPassword" />
                    <BtnContainer>
                        <Button
                            onClickEvent={() => console.log("not yet")}
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

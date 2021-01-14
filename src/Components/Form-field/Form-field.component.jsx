import React, { Component } from "react"
import {
    SigninGroup,
    FormLable,
    FormInput,
    PasswordInput,
    BtnContainer,
} from "./Form-field.style.jsx"

export class FormField extends Component {
    constructor(props) {
        super(props)

        this.state = {
            shrink: "",
        }
    }

    render() {
        const { label, type } = this.props
        return (
            <SigninGroup
                onFocus={() => this.setState({ shrink: "shrink" })}
                onBlur={() => this.setState({ shrink: "" })}
            >
                {label ? (
                    <FormLable htmlFor={label} className={this.state.shrink}>
                        {label}
                    </FormLable>
                ) : null}
                {type == "password" ? (
                    <PasswordInput type={type} />
                ) : (
                    <FormInput type={type} />
                )}
            </SigninGroup>
        )
    }
}

export default FormField

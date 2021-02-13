import styled, { css } from "styled-components"

const sub_color = "gray"
const main_color = "black"

export const SigninGroup = styled.div`
    position: relative;
    margin: 40px 0;
`
const shrinkLable = css`
    top: -14px;
    font-size: 12px;
    color: ${main_color};
`

export const FormLable = styled.label`
    color: ${sub_color};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
        ${shrinkLable}
    }
`
export const FormInput = styled.input`
    background: none;
    background-color: white;
    color: ${sub_color};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${sub_color};
    margin: 25px 0;

    &:focus {
        outline: none;
    }
    &:focus ~ ${FormLable} {
        ${shrinkLable}
    }
`

export const PasswordInput = styled(FormInput).attrs({ type: "password" })`
    letter-spacing: 0.3em;
`

/**


@mixin shrinkLabel {

}

.group {
    .form-input {
        &:focus ~ .form-input-label {

        }
    }

    input[type="password"] {
    }

    .form-input-label {
                &.shrink {
            @include shrinkLabel();
        }
    }
}
.btn-container {

}

 */

import styled from "styled-components"

export const SigninForm = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;

    .title {
        margin: 10px 0;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
    }
`
export const Title = styled.label`
    margin: 10px 0;
    h2 {
        font-family: "Open Sans Condensed" !important;
        display: block;
        font-size: 2em;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }
    span {
        font-size: 18px;
    }
`
export const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

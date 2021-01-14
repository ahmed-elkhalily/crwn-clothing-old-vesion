import styled from "styled-components"
import Button from "../Button/Button-component"

export const Image = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`

export const CustomBtn = styled(Button)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
`
export const CollectionItemStyled = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover {
        ${Image} {
            opacity: 0.8;
        }

        ${CustomBtn} {
            opacity: 0.85;
            display: flex;
        }
    }
`

export const CollectionFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`

export const Name = styled.h4`
    width: 85%;
    margin-bottom: 15px;
`

export const Price = styled.h4`
    width: 15%;
    text-align: right;
`

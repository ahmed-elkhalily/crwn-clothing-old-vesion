import styled, { css } from "styled-components"

const cssComp = css`
    width: 23%;
`

export const CheckoutItemStyle = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
`

export const Name = styled.div`
    ${cssComp}
`
export const Price = styled.div`
    ${cssComp}
`
export const Quantity = styled.div`
    ${cssComp}
    padding-left: 20px;
`

export const RemoveBtn = styled.div`
    padding-left: 12px;
    cursor: pointer;
`
/*
.checkout-item {
    .image-container {
        img {
       }
    }
    .name,
    .quantity,
    .price {
    }

    .quantity {
    }
}

.remove-button {
}

*/

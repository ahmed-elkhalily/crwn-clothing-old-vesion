import styled from "styled-components"

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const CatImg = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    position: relative;
    &:after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        background: rgba(#000, 0.75);
    }
`
export const CatContainer = styled.div`
    padding: 10px;
    flex-basis: calc(100% / 3);
    &:hover ${CatImg} {
        transform: scale(1.2);
        transition: all 6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    &.large {
        flex-basis: 50%;
    }
`

export const Cat = styled.div`
    border: 1px solid #e1e1e1;
    height: 275px;
    position: relative;
    overflow: hidden;
`

export const CatHeader = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 15px;
    border: 1px solid #e1e1e1;
    background: rgb(225 225 225 / 63%);
    text-align: center;
    cursor: pointer;
`
export const CatTitle = styled.div`
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;
`

export const CatSpan = styled.div`
    font-size: 15px;
    font-weight: 300;
`

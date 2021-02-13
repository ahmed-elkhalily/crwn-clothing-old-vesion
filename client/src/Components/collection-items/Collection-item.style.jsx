import styled from "styled-components"
import { CustomBtnGlobal } from "../Button/Button.style"
export const Image = styled.div`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
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

		${CustomBtnGlobal} {
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
	width: 70%;
	margin-bottom: 15px;
`

export const Price = styled.h4`
	width: 30%;
	text-align: right;
	margin: 0;
`

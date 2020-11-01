import styled from 'styled-components';

export const CartItemContainer = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	margin-bottom: 15px;
`;

export const ImageContainer = styled.img`
	width: 30%;
`;

export const ItemDetailsContainer = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 10px 10px;
`;

export const NameContainer = styled.span`
	font-weight: bold;
	color: #616161;
	font-size: 16px;
`;

export const PriceContainer = styled.span`
	font-size: 16px;
`;

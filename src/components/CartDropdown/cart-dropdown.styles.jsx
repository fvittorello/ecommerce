import styled from 'styled-components';
import { CustomButton } from 'components/CustomButton';

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid #000000;
	background: #ffffff;
	top: 80px;
	right: 60px;
	z-index: 5;
`;

export const CartDropdownButton = styled(CustomButton)`
	margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow: scroll;

	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */

	&::-webkit-scrollbar {
		display: none;
	}
`;

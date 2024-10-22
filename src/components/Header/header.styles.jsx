import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
	height: 70px;
	width: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
	border-radius: 5px;

	&:hover {
		background: #c4c4c444;
	}
`;

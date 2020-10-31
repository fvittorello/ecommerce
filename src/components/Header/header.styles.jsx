import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
	padding: 10px 15px;
	cursor: pointer;
	border-radius: 5px;
`;

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
	${OptionContainerStyles}

	${OptionContainerStyles}:hover {
		background: #c4c4c444;
	}
`;
export const OptionDiv = styled.div`
	${OptionContainerStyles}

	${OptionContainerStyles}:hover {
		background: #c4c4c444;
	}
`;

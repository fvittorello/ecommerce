import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;

export const TitleContainer = styled.h2`
	font-size: 28px;
	margin-bottom: 25px;

	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;

export const PreviewContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

import React from 'react';

import CollectionItem from 'components/CollectionItem';

// Styles
import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './preview-collection.styles';

const CollectionPreview = ({ title, items }) => {
	return (
		<CollectionPreviewContainer>
			<TitleContainer>{title.toUpperCase()}</TitleContainer>
			<PreviewContainer>
				{items
					.filter((item, idx) => idx < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</PreviewContainer>
		</CollectionPreviewContainer>
	);
};

export default CollectionPreview;

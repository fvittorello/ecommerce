import React from 'react';
import { withRouter } from 'react-router-dom';

// Styles
import {
	MenuItemContainer,
	BackgroundContainer,
	ContentContainer,
	ContentTitle,
	ContentSubtitle,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
	return (
		<MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
			<BackgroundContainer className='background-image' imageUrl={imageUrl} />
			<ContentContainer>
				<ContentTitle>{title}</ContentTitle>
				<ContentSubtitle>SHOP NOW</ContentSubtitle>
			</ContentContainer>
		</MenuItemContainer>
	);
};

export default withRouter(MenuItem);

import React from 'react';
import { connect } from 'react-redux';

import { addItem } from 'redux/cart/cart.actions';

// Styles
import {
	CollectionItemContainer,
	AddButton,
	BackgroundImage,
	CollectionFooterContainer,
	NameContainer,
	PriceContainer,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<CollectionItemContainer>
			<BackgroundImage imageUrl={imageUrl} />
			<CollectionFooterContainer>
				<NameContainer children={name} />
				<PriceContainer children={price} />
			</CollectionFooterContainer>
			<AddButton onClick={() => addItem(item)} inverted>
				ADD TO CART
			</AddButton>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from 'redux/cart/cart.actions';
import { selectCartItemsCount } from 'redux/cart/cart.selector';

// Styles
import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
	return (
		<CartIconContainer onClick={toggleCartHidden}>
			<ShoppingIconContainer />
			<ItemCountContainer children={itemCount} />
		</CartIconContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

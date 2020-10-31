import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from 'redux/cart/cart.selector';
import { toggleCartHidden } from 'redux/cart/cart.actions';

// Components
import CartItem from 'components/CartItem';

// Styles
import {
	CartDropdownContainer,
	CartItemsContainer,
	CartDropdownButton,
	EmptyMessageContainer,
} from './cart-dropdown.styles.jsx';

const CartDropdown = ({ cartItems, history, dispatch }) => {
	return (
		<CartDropdownContainer>
			<CartItemsContainer>
				{cartItems.length ? (
					cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
				) : (
					<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
				)}
			</CartItemsContainer>
			<CartDropdownButton
				onClick={() => {
					history.push('/checkout');
					dispatch(toggleCartHidden());
				}}
				dropdown>
				GO TO CHECKOUT
			</CartDropdownButton>
		</CartDropdownContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

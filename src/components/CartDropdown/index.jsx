import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CustomButton } from 'components/CustomButton';
import CartItem from 'components/CartItem';
import { selectCartItems } from 'redux/cart/cart.selector';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))}
			</div>
			<CustomButton dropdown>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);

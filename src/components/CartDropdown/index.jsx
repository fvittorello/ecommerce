import React from 'react';

import { CustomButton } from 'components/CustomButton';

import './cart-dropdown.styles.scss';

export const CartDropdown = () => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items' />
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

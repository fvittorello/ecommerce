import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from 'redux/cart/cart.selector';

// Components
import CheckoutItem from 'components/CheckoutItem';
import StripeButton from 'components/StripeButton';

// Styles
import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	HeaderBlockContainer,
	TotalContainer,
	TestWarning,
} from './checkout.styles';

const Checkout = ({ cartItems, total }) => {
	return (
		<CheckoutPageContainer>
			<CheckoutHeaderContainer>
				<HeaderBlockContainer>
					<span>Product</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Description</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Quantity</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Price</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Remove</span>
				</HeaderBlockContainer>
			</CheckoutHeaderContainer>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}

			<TotalContainer>
				<span>TOTAL: ${total}</span>
			</TotalContainer>
			<TestWarning>
				*Please use the following test credit card for payments*
				<br />
				4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
			</TestWarning>
			<StripeButton price={total} />
		</CheckoutPageContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);

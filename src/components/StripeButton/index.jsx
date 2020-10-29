import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;

	const publishableKey =
		'pk_test_51HhgkpIx73AtSqzuMENN10qRLLHrgnl5WPbEfCkm734eq12wcGmWj9NCzpM0uXamzMHgU1Pqjxh5fIszrbuRADPf00Mg9iQygH';

	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful');
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='Ecommerce ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/R3Z.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;

import React from 'react';

import './custom-button.styles.scss';

export const CustomButton = ({ children, isGoogleSignIn, inverted, dropdown, ...otherProps }) => {
	return (
		<button
			className={`${dropdown ? 'dropdown' : ''} ${inverted ? 'inverted' : ''} ${
				isGoogleSignIn ? 'google-sign-in' : ''
			} custom-button`}
			{...otherProps}>
			{children}
		</button>
	);
};

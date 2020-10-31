import React from 'react';

// Styles
import { CustomButtonContainer } from './custom-button.styles.jsx';

export const CustomButton = ({ children, ...props }) => {
	return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

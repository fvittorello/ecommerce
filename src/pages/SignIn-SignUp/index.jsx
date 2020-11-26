import React from 'react';

import SignIn from 'components/SignIn';
import SignUp from 'components/SignUp';

// Styles
import { SignInAndSignUpContainer } from './signin-signup.styles';

export const SignInAndSignUpPage = () => {
	return (
		<SignInAndSignUpContainer>
			<SignIn />
			<SignUp />
		</SignInAndSignUpContainer>
	);
};

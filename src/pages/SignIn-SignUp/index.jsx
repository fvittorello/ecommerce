import React from 'react';

import { SignIn } from 'components/SignIn';
import SignUp from 'components/SignUp';

import './signin-signup.styles.scss';

export const SignInAndSignUpPage = () => {
	return (
		<div className='sign-in-and-sign-up'>
			<SignIn />
			<SignUp />
		</div>
	);
};

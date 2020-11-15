import React, { useState } from 'react';
import { connect } from 'react-redux';

import { FormInput } from 'components/FormInput';
import { CustomButton } from 'components/CustomButton';

import { googleSignInStart, emailSignInStart } from 'redux/user/user.actions';

import './sign-in.styles.scss';

export const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setCredentials] = useState({ email: '', password: '' });

	const { email, password } = userCredentials;

	const handleSubmit = async (event) => {
		event.preventDefault();

		emailSignInStart(email, password);
	};

	const handleChange = (event) => {
		const { value, name } = event.target;

		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sign in with your password</span>

			<form onSubmit={handleSubmit}>
				<FormInput type='text' name='email' value={email} handleChange={handleChange} label='email' required />

				<FormInput
					type='password'
					name='password'
					value={password}
					handleChange={handleChange}
					label='password'
					required
				/>

				<div className='buttons'>
					<CustomButton type='submit'>Sign in</CustomButton>
					<CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);

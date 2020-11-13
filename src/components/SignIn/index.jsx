import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormInput } from 'components/FormInput';
import { CustomButton } from 'components/CustomButton';

import { auth, signInWithGoogle } from 'firebase/firebase.utils';
import { googleSignInStart } from 'redux/user/user.actions';

import './sign-in.styles.scss';

export class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.error(error);
		}

		this.setState({ email: '', password: '' });
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		const { googleSignInStart } = this.props;

		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='email'
						value={this.state.email}
						handleChange={this.handleChange}
						label='email'
						required
					/>

					<FormInput
						type='password'
						name='password'
						value={this.state.password}
						handleChange={this.handleChange}
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
	}
}

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(SignIn);

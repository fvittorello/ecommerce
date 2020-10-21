import React, { Component } from 'react';

import { FormInput } from 'components/FormInput';
import { CustomButton } from 'components/CustomButton';

import './sign-in.styles.scss';

export class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ email: '', password: '' });
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
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

					<CustomButton type='submit'>Sign in</CustomButton>
				</form>
			</div>
		);
	}
}

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from 'redux/cart/cart.selector';
import { selectCurrentUser } from 'redux/user/user.selector';
import { signOutStart } from 'redux/user/user.actions';

// Components
import CartIcon from 'components/CartIcon';
import CartDropdown from 'components/CartDropdown';

// Styles
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles.jsx';

const Header = ({ currentUser, hidden, signOutStart }) => {
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo className='logo' />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/shop'>SHOP</OptionLink>
				<OptionLink to='/contact'>CONTACT</OptionLink>
				{currentUser ? (
					<OptionLink as='div' onClick={signOutStart}>
						SIGN OUT
					</OptionLink>
				) : (
					<OptionLink to='/signin'>SIGN IN</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <CartDropdown />}
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

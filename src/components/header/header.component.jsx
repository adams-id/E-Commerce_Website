import React from 'react';
import {auth} from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './header.styles';

const Header = ({ currentUser, hidden }) => ( //header component with the proper routing page link attached as "to"
    <HeaderContainer> 
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'> 
                CONTACT
            </OptionLink>
            { //Here, if the current user is signed in, show sign out as the top text else if not, show sign in as the top text
                currentUser ? (
                <OptionDiv onClick={() => auth.signOut()}> SIGN OUT</OptionDiv>
                ) : (
                <OptionLink to='/signin'> 
                    SIGN IN 
                </OptionLink>
            )}
            <CartIcon />
        </OptionsContainer>
        {hidden ? (null) : (<CartDropdown />)}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser, 
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
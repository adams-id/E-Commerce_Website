import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser }) => ( //header component with the proper routing page link attached as "to"
    <div className='header'> 
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'> 
                CONTACT
            </Link>
            { //Here, if the current user is signed in, show sign out as the top text else if not, show sign in as the top text
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>
                :
                <Link className='option' to='/signin'> 
                    SIGN IN 
                </Link>
            }        
        </div>
    </div>
);

export default Header;
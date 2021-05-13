import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectcartHiddeen} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';

const Header=({currentUser,hidden})=>{
    return(
        <div className='header'>
            <Link to='/' >
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser?(
                       <div className='option' onClick={()=>auth.signOut()}>
                            SIGN OUT
                       </div> 
                    ):
                    (<Link to='/signin' className='option' >
                        SIGN IN
                    </Link>)
                }
                <CartIcon />
            </div>
            {
                hidden? null:<CartDropdown />
            }         
        </div>
    )
}
const mapStatetoProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectcartHiddeen
})
export default connect(mapStatetoProps)(Header);
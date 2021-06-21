import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss';
import { createStructuredSelector } from 'reselect';

const CartDropdown=({cartItems,history,toggleCartHidden})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.length!==0?(
                    cartItems.map(cartItem=>(
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
            )
            :<span className='empty-message'>
                Your Cart is Empty &nbsp; ☹☹☹☹
            </span>
        }
        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout')
            toggleCartHidden();
        }}  >GO To CHECKOUT</CustomButton>
    </div>
);
const mapStateToProps=createStructuredSelector(
    {
       cartItems:selectCartItems
    }
)

export default withRouter(connect(mapStateToProps,{toggleCartHidden})(CartDropdown));
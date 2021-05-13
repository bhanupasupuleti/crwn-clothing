import React from 'react';

import './cart-item.styles.scss';

const CartItem=({item:{imageUrl,price,name,quantity}})=>(
    <div className='cart-item'>
        <img src={imageUrl} alt='item'/>
         &nbsp;
        <div>
            <span className='name'>
                {name} &nbsp;
            </span>
            <span className='price'>
               {quantity} x{price}&#x20B9;
            </span>
        </div>
    </div>
)

export default CartItem;
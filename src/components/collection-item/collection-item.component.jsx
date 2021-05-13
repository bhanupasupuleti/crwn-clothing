import React from 'react';
import {connect} from 'react-redux'

import CustomButton from '../custom-button/custom-button.component';
import {addItem} from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem=({item,addItem})=>{
    const {imageUrl,name,price}=item;
    return(
        <div className='collection-item'>
            <div 
                className='image'
                style={{backgroundImage:`url(${imageUrl})`}}>            
            </div>
            <div className='collection-footer'>
                <span className='name'>
                    {name}
                </span>
                <span className='price'>
                    {price}
                </span>
            </div>
            <CustomButton inverted onClick={()=>addItem(item)} >
                Add to Cart
            </CustomButton>
        </div>
    )
}

export default connect(null,{addItem})(CollectionItem)
import CartActionTypes from './cart.types';
import {addItemToCart} from './cart.utils';
const INITIAL_STATE={
    hidden:true,
    cartItems:[]
};

const cartReduer= (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }
        case CartActionTypes.HIDE_CART:
            return{
                ...state,
                hidden:true
            }
        default:
           return state;
    }
};

export default cartReduer;
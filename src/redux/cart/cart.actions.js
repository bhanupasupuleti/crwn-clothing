import CartActionTypes from './cart.types';
import CartActionsType from './cart.types';

export const toggleCartHidden=()=>({
    type:CartActionsType.TOGGLE_CART_HIDDEN
})

export const addItem=item=>({
    type:CartActionTypes.ADD_ITEM,
    payload:item
})

export const hideCart=()=>({
    type:CartActionsType.HIDE_CART
})
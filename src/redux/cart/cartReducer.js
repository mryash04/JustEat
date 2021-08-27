import {ADD_TO_CART} from "./cartType";
import {REMOVE_TO_CART} from "./cartType";

const initialState = {
    cartData : []
};

const cartReducer = (state=initialState, action) =>{
    console.warn(action.type, action.payload, action.id);
    switch(action.type){
        case ADD_TO_CART : return{
            ...state,
            cartData : [
                ...state.cartData,
                action.payload
            ]
        }
        case REMOVE_TO_CART :
            const newCartData = state.cartData.filter((cartItem) => cartItem.id !== action.id);
            console.log(newCartData);
        return{
            cartData : newCartData
        }
        default : return state
    }
};

export default cartReducer;
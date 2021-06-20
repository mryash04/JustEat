import {ADD_TO_CART} from "./cartType";
import {REMOVE_TO_CART} from "./cartType";

const addToCart = (data) =>{
    console.warn(data);
    return{
        type : ADD_TO_CART,
        id : Math.random(),
        payload : data
    }
};

const deleteFromCart = (id) =>{
    console.log(id);
    return{
        type : REMOVE_TO_CART,
        id
    }
};

export {addToCart, deleteFromCart};
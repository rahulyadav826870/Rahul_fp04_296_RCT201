// Cart Actions here
// Product actions here
import axios from "axios"

import { GET_CART_ITEMS_LOADING, GET_CART_ITEMS_ERROR,GET_CART_ITEMS_SUCCESS,GET_CART_ITEMS_LOADING,GET_CART_ITEMS_ERROR,GET_CART_ITEMS_SUCCESS,GET_PRODUCTS_ERROR,GET_PRODUCTS_LOADING,GET_PRODUCTS_SUCCESS} from "./cart.types"; 
export const productAction =()=>async(dispatch)=>{
    try {
        dispatch({type:GET_PRODUCTS_LOADING});
        const {data} =await axios.get(
            "http://localhost:8080/products"
        );
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({
            type:GET_PRODUCTS_ERROR,
            payload: error.data && error.response.data.message ? error .response.data.message:error.message
        })
    }
}
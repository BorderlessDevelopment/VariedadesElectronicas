import axios from 'axios';

import {
    ALL_PRODUCTS_FAIL,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_REQUEST,
    CLEAR_ERRORS
} from '../constants/productsConstants';

export const getProducts = () => async (dispatch) => {
    try { 
        dispatch({type: ALL_PRODUCTS_REQUEST})

        const {data} = await axios.get('api/productos');

        dispatch({type: ALL_PRODUCTS_SUCCESS, 
            payload: data
        });

    } catch (error) {
        dispatch({type: ALL_PRODUCTS_FAIL, 
        payload: error.response.datamessage
        })
        
    }
}

//clear error
export const clearErrors = () => async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}

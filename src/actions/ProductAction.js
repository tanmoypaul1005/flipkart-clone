
import { productConstants } from './constants';
import axiosIntance from './../Helpers/axios';


export const getProductsBySlug =(slug)=>{
    return async dispatch =>{
        const res=await axiosIntance.get(`/products/${slug}`);
        console.log(res);
        if (res.status === 200) {
            dispatch({
                type: productConstants.GET_PRODUCTS_BY_SLUG,
                payload:res.data
            });
        } else {
            // dispatch({
            //     type: 
            // })
    }
}
}


export const getProductPage = (payload) => {
    return async dispatch => {
        try {
            const { cid, type } = payload.params;
            const res = await axiosIntance.get(`/page/${cid}/${type}`);
            console.log("RES",res);
            dispatch({ type: productConstants.GET_PRODUCT_PAGE_REQUEST });
            if (res.status === 200) {
                const { page } = res.data;
                dispatch({
                    type: productConstants.GET_PRODUCT_PAGE_SUCCESS,
                    payload: { page }
                });
            } else {
                const { error } = res.data;
                dispatch({
                    type: productConstants.GET_PRODUCT_PAGE_FAILURE,
                    payload: { error }
                });
            }
        } catch(error) {
            console.log(error)
        }
    }
}




export const getProductDetailsById = (payload) => {
    return async dispatch => {
        dispatch({ type: productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
        let res;
        try {
            const { productId } = payload.params;
            res = await axiosIntance.get(`product/${productId}`);
            console.log(res);
           
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
                payload: { productDetails: res.data.product }
            });

        } catch(error) {
            console.log(error);
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload: { error: res.data.error }
            });
        }

    }
}

import axiosApi from "../../api/axiosApi"
import { Actiontypes } from "../constants/action-types"

export const fetchProducts = () => {
    return async (dispatch)=> {
        const response = await axiosApi.get("/catalog-data")
        console.log(response.data)
        dispatch({
            type: Actiontypes.FETCH_PRODUCTS,
            payload: response.data
        })
    }
}

export const fetchProduct = (productId) => {
    return async (dispatch)=> {
        const response = await axiosApi.get(`/catalog-data/${productId}`)
        console.log(response.data)
        dispatch({
            type: Actiontypes.SELECTED_PRODUCT,
            payload: response.data
        })
    }
}

// export const setProducts = (products) => {
//     return {
//         type: Actiontypes.SET_PRODUCTS,
//         payload: products
//     }
// }

// export const selectedProduct = (product) => {
//     return {
//         type: Actiontypes.SELECTED_PRODUCT,
//         payload: product
//     }
// }

export const removeSelectedProduct = () => {
    return {
        type: Actiontypes.REMOVE_SELECTED_PRODUCT,
    }
}
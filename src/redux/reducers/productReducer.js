import { Actiontypes } from "../constants/action-types"

const initalState = {
    products: [],
}

export const productsReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case Actiontypes.SET_PRODUCTS:
            return { ...state, products: payload }
        default:
            return state
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case Actiontypes.SELECTED_PRODUCT:
            return { ...state, ...payload }
        case Actiontypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }
}
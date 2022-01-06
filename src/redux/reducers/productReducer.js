import { Actiontypes } from "../constants/action-types"

const initalState = {
    products: [],
}

export const productsReducer= (state= initalState, {type, payload}) => {
    switch(type){
        case Actiontypes.SET_PRODUCTS:
            return{...state, products: payload}
        default:
            return state
    }
}
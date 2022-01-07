import { combineReducers } from "redux";
import { productsReducer, selectedProductReducer } from "./productReducer";

export const reducers= combineReducers({
    allProducts: productsReducer,
    product: selectedProductReducer
})
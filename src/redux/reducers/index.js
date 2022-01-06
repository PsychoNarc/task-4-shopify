import { combineReducers } from "redux";
import { productsReducer } from "./productReducer";

export const reducers= combineReducers({
    allProducts: productsReducer,
})
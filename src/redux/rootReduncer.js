import {categoryReducer} from "./categories/reducer";
import {menuReducer} from "./menu/reducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    menu:menuReducer,
    categories:categoryReducer
})

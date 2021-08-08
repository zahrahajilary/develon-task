import {
    REQUEST_CATEGORY_ITEM_FAILED,
    REQUEST_CATEGORY_ITEM_SUCCESS,
    REQUEST_CATEGORY_ITEM_START, SELECTED_CATEGORY, LIMIT_HANDLER
} from './constants'
import {act} from "@testing-library/react";

const initial_state = {
    isFetching:false,
    items:[],
    error:'',
    selectedCategory:'',
    limit:10
}

export const categoryReducer = (state=initial_state,action)=>{
    switch (action.type) {
        case REQUEST_CATEGORY_ITEM_START:
            return{...state,isFetching: true};
        case REQUEST_CATEGORY_ITEM_SUCCESS:
            return {...state,isFetching: false,items:action.payload};
        case REQUEST_CATEGORY_ITEM_FAILED:
            return {...state,isFetching: false,error:action.payload};
        case SELECTED_CATEGORY:
            return {...state,selectedCategory: action.payload};
        case LIMIT_HANDLER:
            return {...state,limit: action.payload};
        default:
            return state
    }
}

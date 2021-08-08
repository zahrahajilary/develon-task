import {REQUEST_CATEGORY_ITEM_START,
    REQUEST_CATEGORY_ITEM_SUCCESS,
    REQUEST_CATEGORY_ITEM_FAILED,
    SELECTED_CATEGORY,LIMIT_HANDLER} from './constants';
import * as reducers from  './reducer';
import * as actions from './actions';

describe('categories',()=>{
    const initialStateCategories = {
        isFetching:false,
        items:[],
        error:'',
        selectedCategory:'',
        limit:10
    };
    it('should return initial state',()=>{
        expect(reducers.categoryReducer(undefined,{})).toEqual(initialStateCategories);
    });
    it('should handle REQUEST_CATEGORY_ITEM_START',()=>{
        expect(reducers.categoryReducer(initialStateCategories,
            {type:REQUEST_CATEGORY_ITEM_START,payload:{id:2,limit:10}})).toEqual({
            isFetching:true,
            items:[],
            error:'',
            selectedCategory:'',
            limit:10
        })
    });
    it('should handle LIMIT_HANDLER',()=>{
       expect(reducers.categoryReducer(initialStateCategories,{
           type:LIMIT_HANDLER,
           payload:20
       })).toEqual({
           isFetching:false,
           items:[],
           error:'',
           selectedCategory:'',
           limit:20
       })
    });
    it('should handle SELECTED_CATEGORY',()=>{
        expect(reducers.categoryReducer(initialStateCategories,{
            type:SELECTED_CATEGORY,
            payload:8
        })).toEqual({
            isFetching:false,
            items:[],
            error:'',
            selectedCategory:8,
            limit:10
        })
    })
})

import {takeLatest,call,put}  from 'redux-saga/effects';
import {getCategoryItems} from '../../services/categories/categories'
import {REQUEST_CATEGORY_ITEM_START} from './constants'
import {failedGetCategoriesItem, successGetCategoriesItem} from "./actions";

export function* fetchCategoryItemsAsync(action) {
    try {
        const categoryItemsResponse = yield call(getCategoryItems, action.payload);
        yield put(successGetCategoriesItem(categoryItemsResponse));

    } catch (error) {
        yield put(failedGetCategoriesItem(error));
    }
}
export function* fetchCategoriesItemStart() {
    yield takeLatest(REQUEST_CATEGORY_ITEM_START, fetchCategoryItemsAsync);
}

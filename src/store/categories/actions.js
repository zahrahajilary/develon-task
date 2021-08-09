import {
  LIMIT_HANDLER,
  REQUEST_CATEGORY_ITEM_FAILED,
  REQUEST_CATEGORY_ITEM_START,
  REQUEST_CATEGORY_ITEM_SUCCESS,
  SELECTED_CATEGORY,
} from "./constants";

export const startGetCategoryItems = (id, limit) => {
  return {
    type: REQUEST_CATEGORY_ITEM_START,
    payload: { id, limit },
  };
};

export const successGetCategoriesItem = (data) => {
  return {
    type: REQUEST_CATEGORY_ITEM_SUCCESS,
    payload: data,
  };
};
export const failedGetCategoriesItem = (error) => ({
  type: REQUEST_CATEGORY_ITEM_FAILED,
  payload: error,
});

export const selectedCategory = (id) => ({
  type: SELECTED_CATEGORY,
  payload: id,
});

export const limitItemHandler = (limit) => ({
  type: LIMIT_HANDLER,
  payload: limit,
});

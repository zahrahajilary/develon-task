import { call, put } from "redux-saga/effects";
import { fetchCategoryItemsAsync } from "./saga";
import { getCategoryItems } from "../../services/categories/categories";
import {
  startGetCategoryItems,
  successGetCategoriesItem,
  failedGetCategoriesItem,
} from "./actions";

import { data } from "./data";

describe("sagas", () => {
  it("should load categories item success", () => {
    const generator = fetchCategoryItemsAsync(startGetCategoryItems(7, 10));
    const response = data;
    expect(generator.next().value).toEqual(
      call(getCategoryItems, { id: 7, limit: 10 })
    );
    expect(generator.next(response).value).toEqual(
      put(successGetCategoriesItem(response))
    );
    expect(generator.next()).toEqual({ done: true, value: undefined });
  });
  it("failure triggers failure action", () => {
    const generator = fetchCategoryItemsAsync(startGetCategoryItems(7, 10));
    const response = "some thing went wrong!";

    expect(generator.next().value).toEqual(
      call(getCategoryItems, { id: 7, limit: 10 })
    );
    expect(generator.throw(response).value).toEqual(
      put(failedGetCategoriesItem(response))
    );

    expect(generator.next()).toEqual({ done: true, value: undefined });
  });
});

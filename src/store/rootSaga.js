import { all, call } from "redux-saga/effects";
import { fetchCategoriesItemStart } from "./categories/saga";

export default function* rootSaga() {
  yield all([call(fetchCategoriesItemStart)]);
}

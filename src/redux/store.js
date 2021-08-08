import { createStore, applyMiddleware } from 'redux';
import {categoryReducer} from './categories/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware);
export const store = createStore(categoryReducer, middlewares);
sagaMiddleware.run(rootSaga);




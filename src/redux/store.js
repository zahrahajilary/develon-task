import { createStore, applyMiddleware } from 'redux';
import {categoryReducer} from './categories/reducer';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from "./rootReduncer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware);
export const store = createStore(rootReducer, middlewares);
sagaMiddleware.run(rootSaga);




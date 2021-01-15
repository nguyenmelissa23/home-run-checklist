import {createStore, applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
// TODO: Comment this when in production;
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development'){
	middleware= [...middleware, logger];
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

export default (store, persistor)
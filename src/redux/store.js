import {createStore, applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];

// if (process.env.NODE_ENV === 'development'){
// 	let logger = require('redux-logger');
// 	middleware= [...middleware, logger];
// }

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

export default (store, persistor)
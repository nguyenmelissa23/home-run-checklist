import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import taskReducer from 'redux/taskRedux/task.reducer';
import userReducer from 'redux/userRedux/user.reducer';

const persistConfig = {
	key: 'root', 
	storage: storage, 
	whitelist: []
};

const rootReducer = combineReducers({
	tasks: taskReducer, 
	user: userReducer
});

export default persistReducer(persistConfig, rootReducer);


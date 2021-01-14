import TaskActionTypes from './task.types';

const initialState = [];

const taskReducer = (state = initialState, action) => {
	switch (action.type){
		case TaskActionTypes.UPDATE_STATUS:
			return action.payload;
		case TaskActionTypes.ADD_NEW:
			return [
				...state, 
				action.payload,
			]
		case TaskActionTypes.DELETE:
			return [
				...state, 
				action.payload,
			]
		default:
			return state;
	}
}

export default taskReducer;

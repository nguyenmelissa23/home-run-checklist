import UserActionTypes from './user.types.js';

const initialState = {
	currentUser: null,
	error: null
};

const userReducer = (state = initialState, action ) => {
	switch (action.type) {
		case UserActionTypes.Sign_Out:
			return{
				...state, 
				currentUser: null, 
				tasks: null, 
				error: null
			}
		case UserActionTypes.SIGN_IN:
			return {
				currentUser: action.payload, 
				error: null
			}	
		case UserActionTypes.Sign_In_With_Error:
			return {
				currentUser: null, 
				error: action.payload
			}
		default: 
			return state;
	}
}

export default userReducer;


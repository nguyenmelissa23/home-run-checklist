import UserActionTypes from './user.types';

import { signInWithGithub } from 'utils/firebase';

export function signIn (){
	signInWithGithub().then((user, error) => {
		if (user){
			return {
				type: UserActionTypes.Sign_In_With_Github, 
				payload: user
			}
		} else {
			return {
				type: UserActionTypes.Sign_In_With_Error, 
				payload: error
			}
		}
	});
}

export const signOut = () => ({
	type: UserActionTypes.Sign_Out, 
})
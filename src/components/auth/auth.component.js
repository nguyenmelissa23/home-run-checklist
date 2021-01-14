import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { signInWithGithub, signOut} from 'utils/firebase';

// import {
// 	signIn, 
// 	signOut
// } from 'redux/userRedux/user.actions'

const Authentication = () => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {

	}, [currentUser])

	return (
		<div>
			{ 
				currentUser ? 
				<div>
					<button onClick={() => {signOut(); setCurrentUser(null)}}>Sign Out</button>
					{currentUser.displayName}
				</div>
				:<button onClick={() => setCurrentUser(signInWithGithub())}>Sign In with Github</button>
			}	
		</div>
		
	)
}

export default (Authentication);
import React from 'react';
import logo from 'logo.svg';

// import {signInWithGithub, signOut} from 'utils/firebase';
import Authentification from 'components/auth/auth.component';

const Header = () => {
	return (
		<div className='App-header'>
			<img src={logo} className="App-logo" alt="logo" />
			<h2 className='App-title'>Passion Project: The Home Run</h2>
			<Authentification />
		</div>
	)
}



export default Header; 
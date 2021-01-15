import firebase from 'firebase/app';
import 'firebase/auth'; 
import 'firebase/firestore';
import dotenv from 'dotenv';
// import config from './config.json';
dotenv.config({path: './firebase.config.env'});

const firebaseConfig = {
	"apiKey": process.env.apiKey,
  "authDomain": process.env.authDomain,
  "databaseURL": process.env.databaseURL,
  "projectId": process.env.projectId,
  "storageBucket": process.env.storageBucket,
  "messagingSenderId": process.env.messagingSenderId,
  "appId": process.env.appId
}	;

firebase.initializeApp(firebaseConfig);

//TASKS
export const saveNewTask =  () => {
	
}

export const getCurrentTaskList = () => {}

//USER:
export const createNewUser = (user) => {

}

//AUTH 
export const auth = firebase.auth();
export const firestore = firebase.firestore(); 
export const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGithub = () => auth.signInWithPopup(provider).then((result) => {
	/** @type {firebase.auth.OAuthCredential} */
	const credential = result.credential;
	// This gives you a GitHub Access Token. You can use it to access the GitHub API.
	const token = credential.accessToken;
	//current signed in user:
	const userObj = result.user;
	const user = {
		displayName: userObj.displayName,
		email: userObj.email, 
	}
	console.log("signInWithGithub... ");
	console.log("user: ", user);
	return user;
}).catch((error) =>{
	console.log("error.code: ", error.code);
	console.log("error.message: ", error.message);
	console.log("error.email: ", error.email);
	return error
});

export const signOut = () => auth.signOut().then(() => {
  // Sign-out successful.
	console.log("Sign-out successful.");
}).catch((error) => {
  // An error happened.
	console.log("error.message: ", error.message)
});

export const checkUserStatus = () => firebase.auth().onAuthStateChanged(user =>{
	if (user){
		//User is signed in
		return {currentUser: user, isLoggedIn: true };
	} else{
		//user is signed
		return {currentUser: null, isLoggedIn: false };
	}
})
export default firebase;
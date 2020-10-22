import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCUV79YzVavninIihKCGBfbn2b-THxhFgs',
	authDomain: 'ecommerce01-e6b2a.firebaseapp.com',
	databaseURL: 'https://ecommerce01-e6b2a.firebaseio.com',
	projectId: 'ecommerce01-e6b2a',
	storageBucket: 'ecommerce01-e6b2a.appspot.com',
	messagingSenderId: '479649692648',
	appId: '1:479649692648:web:b0383c2e7026bc9747c25d',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.error('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

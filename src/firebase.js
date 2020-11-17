import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "./settings"

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()


export const signIn = async (email, password) => {
	try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password)
		return userCredential
	} catch (err) {
		console.error("Error signing in with password and email", err);
	}
};



export const signUp = async (email, password) => {
	try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password)
		return userCredential
	} catch (err) {
		console.error("Error signing in with password and email", err);
	}
};
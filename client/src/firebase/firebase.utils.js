import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
	apiKey: "AIzaSyC43XDu4ja5TAJAFdLNLvQq6n2lGYlWFq8",
	authDomain: "crwn-db-132e2.firebaseapp.com",
	projectId: "crwn-db-132e2",
	storageBucket: "crwn-db-132e2.appspot.com",
	messagingSenderId: "106712483698",
	appId: "1:106712483698:web:e7d37db7de77921bd33feb",
	measurementId: "G-WF6RDF541P",
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// add user to database "firebase"
export const getUser = async (id, userData) => {
	let doc = await firestore.doc(`user/${id}`).get().exists
	if (doc) return
	else {
		try {
			doc = await firestore.doc(`user/${id}`).set({
				...userData,
				id,
			})
		} catch (error) {}
	}
	return doc
}

// create email with email and password
export const createUserByEmail = async (
	name,
	email,
	password,
	confirmPassword
) => {
	if (password === confirmPassword) {
		try {
			const user = await auth.createUserWithEmailAndPassword(
				email,
				password
			)
			return user
		} catch (error) {
			throw new Error(error.message)
		}
	}
}

// collect collections docs
export const snapShotMapToReduce = (snapShot) => {
	let shopCollections = {}

	snapShot.docs.map((doc) => {
		shopCollections[doc.data().title.toLowerCase()] = doc.data()
		return null
	})
	return shopCollections
}

// signin with google
const userProvider = new firebase.auth.GoogleAuthProvider()

export const signinWithGoogle = () => auth.signInWithPopup(userProvider)

export default firebase

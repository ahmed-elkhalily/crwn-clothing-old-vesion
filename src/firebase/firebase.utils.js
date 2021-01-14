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
        } catch (error) {
            console.log(error.message)
        }
    }
    return doc
}

export const createUserByEmail = async (email, password, confirmPassword) => {
    if (password === confirmPassword) {
        try {
            const user = await auth.createUserWithEmailAndPassword(
                email,
                password
            )
            console.log(user, "user success you have make an acount")
        } catch (error) {
            console.log(error)
        }
    }
}

export const signinWithEmailAndPassword = () => {}

const provider = new firebase.auth.GoogleAuthProvider()

export const signinWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

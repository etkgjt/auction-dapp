import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/database"
import "firebase/auth"
import "firebase/storage"

import { FIREBASE_CONFIG } from "../configs/apiFireBase"

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG)
}

export const realtimeDB = firebase.database()
export const firestoreDB = firebase.firestore()
export const authDB = firebase.auth()
export const firebaseStorage = firebase.storage()

export default firebase

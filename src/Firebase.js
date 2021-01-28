import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyD0ktuYjK-uYOackFP5crr8pS5kTT_8hx4",
    authDomain: "auth-development-c5ac1.firebaseapp.com",
    projectId: "auth-development-c5ac1",
    storageBucket: "auth-development-c5ac1.appspot.com",
    messagingSenderId: "1081678062754",
    appId: "1:1081678062754:web:b952de9a9866b37f7ea3fb"
})

export const auth = app.auth()
export default app
import {initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAfgq4E10mlJix8lPe6Jvfye2FTedHa0QU",
    authDomain: "authentication-cl.firebaseapp.com",
    projectId: "authentication-cl",
    storageBucket: "authentication-cl.appspot.com",
    messagingSenderId: "782250818177",
    appId: "1:782250818177:web:2a7a5ef2b603b9fbc7ab80",
    measurementId: "G-VXD7D7151F"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}

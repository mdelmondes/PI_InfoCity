import firebase from 'firebase';
import {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    MESSAGE_SENDER_ID,
    APP_ID
} from 'react-native-dotenv';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD8HaBKssFjwDXj9RHwlx6FQyoMk0T0pa8",
    authDomain: "faculpi-ae8c9.firebaseapp.com",
    databaseURL: "https://faculpi-ae8c9.firebaseio.com",
    projectId: "faculpi-ae8c9",
    storageBucket: "faculpi-ae8c9.appspot.com",
    messagingSenderId: "422186403134",
    appId: "1:422186403134:web:2d644b2191070ca765186f"
}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()

// avoid deprecated warnings
db.settings({
    timestampsInSnapshots: true
})

export default Firebase
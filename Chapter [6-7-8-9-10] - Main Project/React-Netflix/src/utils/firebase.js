// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.FIREBASE_apiKey,
    authDomain: import.meta.env.FIREBASE_authDomain,
    projectId: import.meta.env.FIREBASE_projectID,
    storageBucket: import.meta.env.FIREBASE_storageBucket,
    messagingSenderId: import.meta.env.FIREBASE_messagingSenderId,
    appId: import.meta.env.FIREBASE_appId,
    measurementId: import.meta.env.FIREBASE_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)


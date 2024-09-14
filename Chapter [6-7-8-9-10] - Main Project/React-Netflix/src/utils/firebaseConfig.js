// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBFbGAVaLCloHrzaBUDATt14bk_HDF2Fn4",
    authDomain: "porto-qo.firebaseapp.com",
    projectId: "porto-qo",
    storageBucket: "porto-qo.appspot.com",
    messagingSenderId: "615148945986",
    appId: "1:615148945986:web:d5dc9d9ed77b1e2328a3db",
    measurementId: "G-X7FVXM54S2"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)


// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDg4lNJqr1LWrF8dMNlPoonsqzn2TtDixA",
    authDomain: "pwa-expense-tracker-affa4.firebaseapp.com",
    projectId: "pwa-expense-tracker-affa4",
    storageBucket: "pwa-expense-tracker-affa4.appspot.com",
    messagingSenderId: "102430648945",
    appId: "1:102430648945:web:57fdfa6cdbfdc975ae09d0"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
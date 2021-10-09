// Import the functions you need from the SDKs you need
import * as firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdai6XsG_lw6bonR0jScOXa2yGoyso8cE",
  authDomain: "arc-cdf0e.firebaseapp.com",
  databaseURL: "https://arc-cdf0e.firebaseio.com",
  projectId: "arc-cdf0e",
  storageBucket: "arc-cdf0e.appspot.com",
  messagingSenderId: "68534086963",
  appId: "1:68534086963:web:03072ec1a1d2576a996246",
  measurementId: "G-L24XYW6J9S"
};

let app, analytics
if(firebase.apps.length === 0) {
    // Initialize Firebase
    app = firebase.initializeApp(firebaseConfig)
} else {
    app =firebase.app()
}
const auth = firebase.auth()

export {auth}
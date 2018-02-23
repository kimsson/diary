import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCqmNCsvxfd1RPV3ZdX8-OCPJ9oF7FUME4",
  authDomain: "door-key-d46a8.firebaseapp.com",
  databaseURL: "https://door-key-d46a8.firebaseio.com",
  projectId: "door-key-d46a8",
  storageBucket: "door-key-d46a8.appspot.com",
  messagingSenderId: "170553132043"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/notes')
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();

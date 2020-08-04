import firebase from 'firebase/app'
import 'firebase/auth';

// var firebaseConfig = {
//     apiKey: "AIzaSyBv8smcSq6KUFImtYKIAWWZ0PgE3FDqS3s",
//     authDomain: "dev-roomlelo.firebaseapp.com",
//     databaseURL: "https://dev-roomlelo.firebaseio.com",
//     projectId: "dev-roomlelo",
//     storageBucket: "dev-roomlelo.appspot.com",
//     messagingSenderId: "450187201766",
//     appId: "1:450187201766:web:808edcd60afea26be93f27"
//   }; 

var firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

firebase.initializeApp(firebaseConfig);


export default firebase

export const url = "https://server.roomlelo.in"
// export const url = "http://localhost:7000"

export const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY 
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBv8smcSq6KUFImtYKIAWWZ0PgE3FDqS3s",
    authDomain: "dev-roomlelo.firebaseapp.com",
    databaseURL: "https://dev-roomlelo.firebaseio.com",
    projectId: "dev-roomlelo",
    storageBucket: "dev-roomlelo.appspot.com",
    messagingSenderId: "450187201766",
    appId: "1:450187201766:web:808edcd60afea26be93f27"
  }; 
    firebase.initializeApp(firebaseConfig); 
    
 
    export default firebase
  export const url = "https://server.roomlelo.in"
  // export const url = "http://localhost:7000"

export const MAP_API_KEY = 'AIzaSyAXQhn9MyUStmO3LUecQISCDgKQ6TaDJMc'

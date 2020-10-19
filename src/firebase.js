import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyB5LgBTFAvZMGXWr3iArxJAVjI9EDiVXQM",
    authDomain: "redux-firebase-discord-clone.firebaseapp.com",
    databaseURL: "https://redux-firebase-discord-clone.firebaseio.com",
    projectId: "redux-firebase-discord-clone",
    storageBucket: "redux-firebase-discord-clone.appspot.com",
    messagingSenderId: "575010681264",
    appId: "1:575010681264:web:c401308756b7894d19e675",
    measurementId: "G-PYCGWK7QLE"
  };

  const firebaseApp = firebase.initializeApp (firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC2VlYcGANPeMBHJcMeNd6zMdZiw2GOPXI",
    authDomain: "solutioninsol.firebaseapp.com",
    databaseURL: "https://solutioninsol.firebaseio.com",
    projectId: "solutioninsol",
    storageBucket: "solutioninsol.appspot.com",
    messagingSenderId: "896772819891",
    appId: "1:896772819891:web:4890da931fd73c2e2219c6",
    measurementId: "G-06NY94G74P"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }

  export const db = firebaseApp.database();
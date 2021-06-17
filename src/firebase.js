import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAc053BoIVPI4hRPDIeVFJJrkv8R5ce0SA",
    authDomain: "linkedin-clone-f52f9.firebaseapp.com",
    projectId: "linkedin-clone-f52f9",
    storageBucket: "linkedin-clone-f52f9.appspot.com",
    messagingSenderId: "414936166888",
    appId: "1:414936166888:web:9310313083cca6baa2b45d"
  };

  const fb = firebase.initializeApp(firebaseConfig);
  const db = fb.firestore();
  const auth = fb.auth();
  export {auth,db};

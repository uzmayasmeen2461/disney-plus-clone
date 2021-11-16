// import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const nfirebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "diney-plus-clone-8e9a9.firebaseapp.com",
//   projectId: "diney-plus-clone-8e9a9",
//   storageBucket: "disney-plus-clone-8e9a9.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDxuHxMd9SXwlNqg3dyEsePeA9dnyscM0",
  authDomain: "disney-plus-8d8e6.firebaseapp.com",
  projectId: "disney-plus-8d8e6",
  storageBucket: "disney-plus-8d8e6.appspot.com",
  messagingSenderId: "285006945334",
  appId: "1:285006945334:web:17993f9e80f110b51dcc97",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

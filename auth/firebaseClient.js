import firebase from "firebase/app";
import "firebase/auth";
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCRBzPnFHQdXdj0idPrpbxOuKiQdaqbAOE",
  authDomain: "project-manager-1-daolens.firebaseapp.com",
  projectId: "project-manager-1-daolens",
  storageBucket: "project-manager-1-daolens.appspot.com",
  messagingSenderId: "536141427455",
  appId: "1:536141427455:web:fae6b1c8974759475152ca",
  measurementId: "G-EMYJ45K57N",
};

export default function firebaseClient() {
  if (!firebase.apps?.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}

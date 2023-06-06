import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAkDMmO8WMZudHG7cfVGp16_iApAFMhipk",
  authDomain: "whatsapp-web-4d7f5.firebaseapp.com",
  projectId: "whatsapp-web-4d7f5",
  storageBucket: "whatsapp-web-4d7f5.appspot.com",
  messagingSenderId: "963069755933",
  appId: "1:963069755933:web:2a6d4e4ee5a50d68d13cf4"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

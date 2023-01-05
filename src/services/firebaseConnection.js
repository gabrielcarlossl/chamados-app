import firebase from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDsHu5ov3paeonWS9D6kRgbR-7q_2EG9Zg",
  authDomain: "chamados-v1.firebaseapp.com",
  projectId: "chamados-v1",
  storageBucket: "chamados-v1.appspot.com",
  messagingSenderId: "580832435593",
  appId: "1:580832435593:web:c27e9c309cd7b350095558",
};

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

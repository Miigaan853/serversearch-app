import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDA7a9dUL6r76pFWujYIWTkEZ_DN0-DT-0",
  authDomain: "serversearch-c7703.firebaseapp.com",
  datebaseURL: "https://serversearch-c7703.firebaseio.com",
  projectId: "serversearch-c7703",
  storageBucket: "serversearch-c7703.appspot.com",
  messagingSenderId: "397740406930",
  appId: "1:397740406930:web:d209b32644afee0f00ce4b",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyDrL1fSU2JYgdfCCP2YZyDXlv9Oa27mdd4",
  authDomain: "rn-uber-eats-clone-yt-b55fa.firebaseapp.com",
  projectId: "rn-uber-eats-clone-yt-b55fa",
  storageBucket: "rn-uber-eats-clone-yt-b55fa.appspot.com",
  messagingSenderId: "755516572476",
  appId: "1:755516572476:web:afb4b3b3ee15f41553d439",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;

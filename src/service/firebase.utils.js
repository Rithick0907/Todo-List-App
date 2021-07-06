import "firebase/auth";

import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDTvz-1A7jqoLZHXL1n2QbruThWcNsRwLk",
  authDomain: "practice-firebase-bd6f2.firebaseapp.com",
  databaseURL: "https://practice-firebase-bd6f2-default-rtdb.firebaseio.com",
  projectId: "practice-firebase-bd6f2",
  storageBucket: "practice-firebase-bd6f2.appspot.com",
  messagingSenderId: "34990365818",
  appId: "1:34990365818:web:715d87c38a8780faf16fc3",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

import "firebase/auth";

import { baseURL } from "./httpConfig";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCHJDy6sfVM83sYexwRmJAldEjCdcVvi3c",
  authDomain: "todo-app-372c1.firebaseapp.com",
  databaseURL: "https://todo-app-372c1-default-rtdb.firebaseio.com",
  projectId: "todo-app-372c1",
  storageBucket: "todo-app-372c1.appspot.com",
  messagingSenderId: "245874058198",
  appId: "1:245874058198:web:43ddac9e8dcb31110a7a77",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig); //If not initialized even once then initialize now
} else {
  firebase.app(); // if already initialized, use that one
}

export const addUserToDB = async (sendRequest, userAuth, additionalData) => {
  if (userAuth) {
    let response = await sendRequest({
      url: `${baseURL}/users/${userAuth.uid}.json`,
      method: "GET",
    });
    if (!response.data) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      const data = { displayName, email, createdAt, ...additionalData };
      response = await sendRequest({
        url: `${baseURL}/users/${userAuth.uid}.json`,
        method: "PUT",
        data,
      });
    }
    return { id: userAuth.uid, ...response.data };
  }
};

export default firebase;

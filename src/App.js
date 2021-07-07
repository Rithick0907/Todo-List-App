import { useEffect, useState } from "react";

import Routes from "./Routes";
import firebase from "./service/firebase.utils";

const App = () => {
  const [user, setUser] = useState("");
  const clearUser = () => {
    firebase.auth().signOut();
  };
  useEffect(() => {
    const unSubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unSubscribe();
  }, []);
  return <Routes clearUser={clearUser} currentUser={user} />;
};

export default App;

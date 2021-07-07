import firebase, { addUserToDB } from "./service/firebase.utils";
import { useEffect, useState } from "react";

import Routes from "./Routes";
import useHttp from "./hooks/useHttp";

const App = () => {
  const [user, setUser] = useState("");

  const { sendRequest } = useHttp();

  useEffect(() => {
    const unSubscribe = firebase.auth().onAuthStateChanged(async (userAuth) => {
      let currentUser = null;
      if (userAuth) {
        currentUser = await addUserToDB(sendRequest, userAuth);
      }
      setUser(currentUser);
    });

    return () => unSubscribe();
  }, []);
  return <Routes currentUser={user} />;
};

export default App;

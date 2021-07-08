import firebase, { addUserToDB } from "./service/firebase.utils";
import { useEffect, useState } from "react";

import Routes from "./Routes";
import UserContext from "./contexts/UserContext";
import useHttp from "./hooks/useHttp";

const App = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const { sendRequest } = useHttp();

  useEffect(() => {
    const unSubscribe = firebase.auth().onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        let currentUser = await addUserToDB(sendRequest, userAuth);
        currentUser = currentUser
          ? localStorage.setItem("user", currentUser)
          : localStorage.removeItem("user");
        setUser(currentUser);
      }
    });

    return () => unSubscribe();
  }, []);
  return (
    <UserContext.Provider value={user}>
      <Routes />
    </UserContext.Provider>
  );
};

export default App;

import { Login, Main, Signup } from "./pages";
import { Redirect, Route, Switch } from "react-router-dom";
import firebase, { addUserToDB } from "./service/firebase.utils";

import UserContext from "./UserContext";
import { useEffect } from "react";
import useHttp from "./hooks/useHttp";

const App = () => {
  const { sendRequest } = useHttp();
  const user = localStorage.getItem("user");

  useEffect(() => {
    const unSubscribe = firebase.auth().onAuthStateChanged(async (userAuth) => {
      let currentUser = null;
      if (userAuth) {
        currentUser = await addUserToDB(sendRequest, userAuth);
      }
      localStorage.setItem("user", currentUser);
    });

    return () => unSubscribe();
  }, []);
  return (
    <UserContext.Provider value={user}>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route
          path="/main"
          render={(props) =>
            user ? <Main {...props} /> : <Redirect to="login" />
          }
        />
        <Redirect to="/login" />
      </Switch>
    </UserContext.Provider>
  );
};

export default App;

import { Login, Main, Signup } from "./pages";
import { Redirect, Route, Switch } from "react-router-dom";

import UserContext from "./contexts/UserContext";
import { useContext } from "react";

const Routes = () => {
  const user = useContext(UserContext);
  return (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route
        path="/main"
        render={(props) =>
          user ? <Main {...props} /> : <Redirect to="/login" />
        }
      />
      <Redirect to="/login" />
    </Switch>
  );
};

export default Routes;

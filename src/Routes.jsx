import { Login, Main, Signup } from "./pages";
import { Redirect, Route, Switch } from "react-router-dom";

const CustomRoute = ({ clearUser, currentUser }) => {
  return (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route
        path="/main"
        render={(props) =>
          currentUser ? <Main {...props} /> : <Redirect to="login" />
        }
      />
      <Redirect to="/login" />
    </Switch>
  );
};
export default CustomRoute;

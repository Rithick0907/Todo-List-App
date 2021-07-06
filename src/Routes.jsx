import { Login, Main, Signup } from "./pages";
import { Redirect, Route, Switch } from "react-router-dom";

const CustomRoute = ({ clearUser }) => {
  return (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route
        path="/login"
        render={(props) => <Login clearUser={clearUser} {...props} />}
      />
      <Route path="/main" component={Main} />
      <Redirect to="/login" />
    </Switch>
  );
};
export default CustomRoute;

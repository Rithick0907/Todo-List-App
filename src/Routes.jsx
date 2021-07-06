import { Switch, Redirect, Route } from "react-router-dom";
import { Main, Login } from "./pages";

const CustomRoute = () => {
  return (
    <Switch>
      <Route path="/main" component={Main} />
      <Route path="/login" component={Login} />
      <Redirect to="/login" />
    </Switch>
  );
};
export default CustomRoute;

import "./App.css";
import AppLayout from "./AppLayout";
import { Redirect, Route, Switch } from "react-router";
import Home from "./Home";
import { Profile } from "./Profile";

const App = () => {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Redirect to="/" />
      </Switch>
    </AppLayout>
  );
};

export default App;

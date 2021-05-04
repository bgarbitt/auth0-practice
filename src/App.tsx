import "./App.css";
import AppLayout from "./AppLayout";
import { Redirect, Route, Switch } from "react-router";
import Home from "./Home";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  console.log(isAuthenticated);
  return (
    <AppLayout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
    </AppLayout>
  );
}

export default App;

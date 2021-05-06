import "./App.css";
import AppLayout from "./AppLayout";
import { Redirect, Route, Switch } from "react-router";
import Home from "./Home";
import { Profile } from "./Profile";
import { QueryClient, QueryClientProvider } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const App = () => {
  const { isLoading, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (!isLoading) {
      getAccessTokenSilently().then((authToken) => {
        localStorage.setItem("token", authToken);
        console.log("token", authToken);
      });
    }
  }, [isLoading, getAccessTokenSilently]);

  return (
    <QueryClientProvider client={new QueryClient()}>
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
    </QueryClientProvider>
  );
};

export default App;

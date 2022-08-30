import Home from "./pages/Home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/Home/Single/Single";
import Create from "./pages/Home/Create/Create";
import Settings from "./pages/Home/settings/Settings";
import Register from "./pages/register/Register";
import Login from "./pages/Login/Login";
import { useContext } from "react";
import { Context } from "./context/Context";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const {user } = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Switch>
        <>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/register">
          {user ? <Home/> : <Register />}
        </Route>
        <Route path="/login">{user? <Home/> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{user ? <Create/> : <Login />}</Route>
        <Route path="/settings">
          {user ? <Settings /> : <Login />}
        </Route>
        </>
      </Switch>
    </Router>
  );
}

export default App;

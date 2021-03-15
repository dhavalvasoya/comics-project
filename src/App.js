import React from "react";
import { Route, Switch } from "react-router-dom";

// import './App.css';
import ComicsDetails from "./pages/ComicsDetails";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/comicsdata" component={ComicsDetails} />
        </Switch>
    </div>
  );
}

export default App;

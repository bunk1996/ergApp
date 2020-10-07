import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Dash from "./Dash";
import NotFound from "./NotFound";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/dash" component={Dash} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

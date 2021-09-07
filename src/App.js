import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import MovieDetails from "./Component/MovieDetails";
import Nav from "./Component/Nav";

function App() {
  return (
    <div className="App">
      <Router>
      < Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path='/details/:id' exact component={MovieDetails} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;

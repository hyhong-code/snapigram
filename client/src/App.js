import React, { Fragment } from "react";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Comment from "./pages/Comment";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/comment/:id" component={Comment} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

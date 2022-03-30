import React from "react";
import Music from "./page/Music/Music";
import Orchestra from "./page/Orchestra/Orchestra";
import Education from "./page/Education/Education";
import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";




function App() { 
  return (
    <BrowserRouter>
        <div className="APP">
          <Switch>
            <Route path="/" component={Music} exact />
            <Route path="/videos/:id" component={Music} />
            <Route path="/orchestra" component={Orchestra} />
            <Route path="/education" component={Education} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;

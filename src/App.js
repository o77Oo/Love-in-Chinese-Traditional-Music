import React from "react";
import Music from "./page/Music/Music";
import Orchestra from "./page/Orchestra/Orchestra";
import About from "./page/About/About";
import Contact from "./page/Contact/Contact";
import Education from "./page/Education/Education";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WindInstruments from "./page/Orchestra/WindInstruments/WindInstruments"
import BowedStringInstruments from "./page/Orchestra/BowedStringInstruments/BowedStringInstruments"
import PercussionInstruments from "./page/Orchestra/PercussionInstruments/PercussionInstruments"
import PluckedInstruments from "./page/Orchestra/PluckedInstruments/PluckedInstruments"




function App() { 
  return (
    <BrowserRouter>
        <div className="APP">
          <Switch>
            <Route path="/" component={Music} exact />
            <Route path="/videos/:id" component={Music} />
            <Route path="/orchestra" component={Orchestra} exact/>
            <Route path="/orchestra/wind" component={WindInstruments} />
            <Route path="/orchestra/bowedstring" component={BowedStringInstruments} />
            <Route path="/orchestra/percussion" component={PercussionInstruments} />
            <Route path="/orchestra/pluckedstring" component={PluckedInstruments} />
            <Route path="/education" component={Education} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;

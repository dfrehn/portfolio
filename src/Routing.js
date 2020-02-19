import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { SlideShow } from "./components/SlideShow";
import Posters from "./components/Posters";
import WebDesign from "./components/WebDesign";

class Routing extends Component {
  render() {
    return (
      <>
        <div>
          <Switch>
            <Route exact path="/" component={SlideShow} />
            <Route exact path="/posters" component={Posters} />
            <Route exact path="/web-design" component={WebDesign} />
          </Switch>
        </div>
      </>
    );
  }
}

export default Routing;

import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router";
//component
import Header from "./components/header/Header";
import Landing from "./container/Landing";
import AboutUs from "./container/AboutUs";
import Products from "./container/Products";
import Demos from "./container/Demos";
import ContactUs from "./container/ContactUs";
//css
import "./assets/css/app.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class App extends Component {
  activeRoute = (e) => {
    console.log("======>", e.currentTarget);
    e.currentTarget.className += " active";
  };

  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/products" component={Products} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/demos" component={Demos} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
      </div>
    );
  }
}

export default App;

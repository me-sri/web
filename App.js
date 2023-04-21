import React from "react";
import "./App.css";
import About from "./Component/About";
import Footer from "./Component/Footer";
import Heathcare from "./Component/Heathcare";
import Claimscare from "./Component/Claimscare";
import Utiliziemanange from "./Component/Utiliziemanange";
import Consultingcare from "./Component/Consultingcare";
import Contact from "./Component/Contact";

import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Heathcare" component={Heathcare} />
          <Route path="/Claimscare" component={Claimscare} />
          <Route path="/Utiliziemanange" component={Utiliziemanange} />
          <Route path="/Consultingcare" component={Consultingcare} />
      
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;

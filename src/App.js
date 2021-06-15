import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import OrderNow from "./components/OrderNow";
import About from "./components/About";

const App = () =>{
  return(
    <>
    <Router>
    <div className="App">
      <Switch>
        <Route path="/aboutus">
          <Header />
          <About />
        </Route>
        <Route path="/plans">
          <h2>Plans</h2>
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/ordernow">
          <OrderNow/>
          {/* <h2>Order Now</h2> */}
        </Route>
        <Route path="/moreblog">
          <h2>More Blog</h2>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
    </>
  )
}

export default App;
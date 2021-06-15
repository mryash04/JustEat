import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
<<<<<<< HEAD
import Login from "./components/Login";
import Signup from "./components/Signup";
import OrderNow from "./components/OrderNow";
=======
import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
>>>>>>> e7d0e27e6aa6d1a5f10a50fda6c070a4eb9e6b07

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
<<<<<<< HEAD
        <Login />
        </Route>
        <Route path="/login">
        <Signup/>
=======
          <Login />
>>>>>>> e7d0e27e6aa6d1a5f10a50fda6c070a4eb9e6b07
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
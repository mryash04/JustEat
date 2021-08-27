import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import OrderNow from "./components/OrderNow";
import About from "./components/About";
import {Provider} from "react-redux";
import store from "./redux/store";
import {addToCart, deleteFromCart} from "./redux/cart/cartAction";
import OrderNowItems from "./components/orderNowItems";
import CheckOut from "./components/CheckOut";
import Payment from "./components/Payment";
import Footer from "./components/Footer";
import Email from "./components/Email";

console.log(store);

const storeItem = store.subscribe(() => console.log(store.getState()));

console.log(storeItem);

console.log(addToCart);

console.log(deleteFromCart);

const App = () =>{
  return(
    <>
    <Router>
      <Provider store={store}>
      <div className="App">
      <Switch>
        <Route path="/aboutus">
          <Header />
          <About />
          <Footer />
        </Route>
        <Route path="/plans">
          <CheckOut />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/ordernow">
          <Header />
          <OrderNow />
          <Footer />
          {/* <h2>Order Now</h2> */}
        </Route>
        <Route path="/moreblog">
          <h2>More Blog</h2>
        </Route>
        <Route path="/pay">
          <Payment />
          {/* <Email /> */}
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
      </Provider>
    </Router>
    </>
  )
}

export default App;
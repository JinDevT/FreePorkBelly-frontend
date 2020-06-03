import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import Review from './pages/Review/Review';



class Routes extends Component {
  render() {
    return (
      <Router>
          <Switch>
              <Route exact path="/index" component={Main}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/product" component={List}/>
              <Route exact path="/detail" component={Detail}/>
              <Route exact path="/cart" component={Cart}/>
              <Route exact path="/payment" component={Payment}/>
              <Route exact path="/review" component={Review}/>
          </Switch>
      </Router>
    );
  }
}

export default Routes;

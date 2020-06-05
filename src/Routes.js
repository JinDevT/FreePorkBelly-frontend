import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import Mypagge from './pages/Mypagge/Mypagge';


class Routes extends Component {
  render() {
    return (
      <Router>
          <Switch>
              <Route exact path="/index" component={Main}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/list" component={List}/>
              <Route exact path="/detail/:id" component={Detail}/> {/* id 추가 - 6.4 진태*/}
              <Route exact path="/cart" component={Cart}/>
              <Route exact path="/payment" component={Payment}/>
              <Route exact path="/mypage" component={Mypagge}/>
          </Switch>
      </Router>
    );
  }
}

export default Routes;

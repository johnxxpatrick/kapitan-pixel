import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import RegisterForm from './components/Registration/index';
import AdminPage from './components/AdminPage';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import 'semantic-ui-css/semantic.min.css';
// import './style.css'
// import './css/bootstrap.min.css'
// require('./css/font-awesome.min.css')
// require('./css/magnific-popup.css')
// require('./css/owl.carousel.css')
// require('./css/owl.theme.default.css')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
  
  }

  render() {
      return (
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/sign-up" component={RegisterForm} />
          <Route component={AdminPage} />
        </Switch>
      )
  }
}

export default (App);

/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './Signup';
import { AuthProvider } from '../../../context/AuthContext';
import Dashboard from './AuthApp';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';

function AppAuth() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default AppAuth;

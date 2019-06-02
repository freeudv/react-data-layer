import React, {useState} from 'react';
import {connect} from 'react-redux';
import {logIn} from '../../store/login/actions';
import LoginForm from '../LoginForm/index';

const Auth = ({loggedIn, logIn, children}) => {
  if (loggedIn) {
    return children;
  } else {
    return <LoginForm onLoginSuccess={logIn} />;
  }
};

const mapStateToProps = state => ({
  loggedIn: state.login.loggedIn
});

const mapDispatchToProps = {
  logIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

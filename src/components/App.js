import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SignupForm from '../containers/SignupForm/SignupForm';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <SignupForm />
      </MuiThemeProvider>
    );
  }
}
 

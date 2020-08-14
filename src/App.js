import React from 'react';
import { Router} from '@reach/router';
import './App.css';
import SignUpForm from './components/signUp/SignUpForm'
import SignInForm from './components/signIn/SignInForm'


function App() {
  return (
    <div className="App">
      <Router>
        <SignUpForm path="/" />
        <SignInForm path="/signIn" />
      </Router>
    </div>
  );
}

export default App;

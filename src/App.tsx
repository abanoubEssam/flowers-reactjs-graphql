import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import MainNavigation from './components/Navigation/MainNavigation';
import LoginPage from './pages/Auth/Login/LoginPage';
import SignUpPage from './pages/Auth/SignUp/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <MainNavigation />
        <main>
          <Switch>
            <Redirect from='/' to='/auth/login/' exact />
            <Route path='/auth/login/' component={LoginPage} />
            <Route path='/auth/sign-up/' component={SignUpPage} />
          </Switch>
        </main>
      </React.Fragment>
    </BrowserRouter>

  );
}

export default App;

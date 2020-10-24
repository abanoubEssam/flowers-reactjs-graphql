import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import MainNavigation from './components/Navigation/MainNavigation';
import LoginPage from './pages/Auth/Login/LoginPage';
import SignUpPage from './pages/Auth/SignUp/SignUpPage';
import { AUTH_TOKEN_LOCAL_STORAGE } from './constants';
import UsersPage from './pages/Users/UsersPage';

const App = () => {
  const token = localStorage.getItem(AUTH_TOKEN_LOCAL_STORAGE)
  return (
    <BrowserRouter>
      <React.Fragment>
        <MainNavigation token={token} />
        <main>
          <Switch>
            {!token ? <Redirect from='/' to='/auth/login/' exact /> : <Redirect from='/auth/login/' to='/' exact />}
            <Route path='/auth/login/' component={LoginPage} />
            <Route path='/auth/sign-up/' component={SignUpPage} />
            <Route path='/users/' component={UsersPage} />
          </Switch>
        </main>
      </React.Fragment>
    </BrowserRouter>

  );
}

export default App;

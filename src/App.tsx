import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import MainNavigation from './components/Navigation/MainNavigation';
import LoginPage from './pages/Auth/Login/LoginPage';
import SignUpPage from './pages/Auth/SignUp/SignUpPage';
import { AUTH_TOKEN_LOCAL_STORAGE } from './utils/constants';
import UsersPage from './pages/Users/UsersPage';
import { RootState } from './store/root-reducer';
import { useSelector, useDispatch } from 'react-redux';
import HomePage from './pages/HomePage/home.page';

const App = () => {
  const token = localStorage.getItem(AUTH_TOKEN_LOCAL_STORAGE);
  const authState = useSelector<RootState, RootState['auth']>((state: RootState) => state.auth);

  console.log('auth-state', authState);
  
  return (
    <BrowserRouter>
      <React.Fragment>
        <MainNavigation token={token} />
        <main>
          <Switch>
            {/* {!token ? <Redirect to='/auth/login/' exact /> : <Redirect to='/' exact />} */}
            <Route path='/auth/login' component={LoginPage} exact />
            <Route path='/auth/sign-up' component={SignUpPage} exact />
            <Route path='/users' component={UsersPage} exact />
			<Route path='/' component={HomePage} exact />
          </Switch>
        </main>
      </React.Fragment>
    </BrowserRouter>

  );
}

export default App;

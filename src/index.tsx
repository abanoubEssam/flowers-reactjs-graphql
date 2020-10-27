import React from 'react';
import ReactDOM from 'react-dom';

import './scss/main.scss';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { Provider } from 'react-redux';
import store from './store/store';

const link = ApolloLink.from([
  createUploadLink({uri: process.env.REACT_APP_SERVER_URL}),
  new HttpLink({ uri: process.env.REACT_APP_SERVER_URL })
])
const client = new ApolloClient({
  // uri: process.env.REACT_APP_SERVER_URL,s
  link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
		<Provider store={store}>
      		<App />
		</Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

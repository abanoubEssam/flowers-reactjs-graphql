import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const link = ApolloLink.from([
  new HttpLink({ uri: process.env.REACT_APP_SERVER_URL }),
  createUploadLink({uri: process.env.REACT_APP_SERVER_URL})
])
const client = new ApolloClient({
  // uri: process.env.REACT_APP_SERVER_URL,s
  cache: new InMemoryCache(),
  link

});

console.log("process.env.SERVER_URL", process.env.REACT_APP_SERVER_URL)
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

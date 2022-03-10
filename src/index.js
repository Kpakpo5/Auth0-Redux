import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { store } from './redux/store'
import { Provider } from 'react-redux'

const domain = process.env.REACT_APP_AUTH0_RED_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_RED_CILENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById('root')
);

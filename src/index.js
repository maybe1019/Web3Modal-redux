import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { DAppProvider } from '@usedapp/core'
import { Provider } from 'react-redux'


import './assets/scss/global.scss'
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <DAppProvider config={{}}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DAppProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

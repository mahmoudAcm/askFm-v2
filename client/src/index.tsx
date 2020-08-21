import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import store from './app/store';
import * as serviceWorker from './serviceWorker';
import MainRoute from "./Routes/Main";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
         <Switch>
             <MainRoute />
         </Switch>
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

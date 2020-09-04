import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from 'react-redux';
import store from './redux/store'
import Theme from "./theme";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'; 
require('dotenv').config()

ReactDOM.render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Theme />
    </MuiPickersUtilsProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from 'react-redux';
import store from './redux/store'
import Theme from "./theme";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// pick a date util library
// import MomentUtils from '@date-io/moment'; 
import DateFnsUtils from '@date-io/date-fns'; 
// import LuxonUtils from '@date-io/luxon';

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

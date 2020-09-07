import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from "react";
// import Bugsnag from '@bugsnag/js'
// import BugsnagPluginReact from '@bugsnag/plugin-react'

import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from 'react-redux';
import store from './redux/store'
import Theme from "./theme";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
// import TagManager from 'react-gtm-module'
require('dotenv').config()
 
// const tagManagerArgs = {
//     gtmId: 'GTM-K7B7H3P'
// }
 
// TagManager.initialize(tagManagerArgs)

// Bugsnag.start({
//   apiKey: '6c48cc7a08bf3a44af58809f64f78829',
//   plugins: [new BugsnagPluginReact()]
// })
// const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React)

ReactDOM.render(
  // <ErrorBoundary>
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Theme />
      </MuiPickersUtilsProvider>
    </Provider>
  // </ErrorBoundary>
  ,  document.getElementById("root")
);

serviceWorker.register();

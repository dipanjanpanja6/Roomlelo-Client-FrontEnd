import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from 'react-redux';
import store from './redux/store' 
require('dotenv').config()

ReactDOM.render(
  <Provider store={store}>
    {/* <ThemeProvider theme={theme}> */}
      <App />
    {/* </ThemeProvider> */}
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

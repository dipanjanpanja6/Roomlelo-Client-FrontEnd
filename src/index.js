import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from 'react-redux';
import store from './redux/store'
import Theme from "./theme";
require('dotenv').config()


ReactDOM.render(
  <Provider store={store}>
    <Theme />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
// import { Provider } from "react-redux";
// import {store} from "./redux/store.js";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.withCredentials = true;


ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

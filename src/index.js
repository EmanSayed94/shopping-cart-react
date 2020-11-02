import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";

import store from "../src/redux/store"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'antd/dist/antd.css'; 

import "./index.css";

import App from "./App/App";

// feature 1
ReactDOM.render(
 <Provider store={store}>
   <BrowserRouter>
   <App />
   </BrowserRouter>

 </Provider>
 ,
  document.getElementById("root")
);

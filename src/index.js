import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA1mUmN7kDZ-56kTITxWZvC2vzb-HerahE",
  authDomain: "bino-00.firebaseapp.com",
  databaseURL: "https://bino-00.firebaseio.com",
  projectId: "bino-00",
  storageBucket: "bino-00.appspot.com",
  messagingSenderId: "54424947440",
  appId: "1:54424947440:web:7a3c4f48967022ce395035",
  measurementId: "G-9MNGSHSRBZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,

  // <React.StrictMode>
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

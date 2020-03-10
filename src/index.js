import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

ReactDOM.render(<App />, document.querySelector("#root"));

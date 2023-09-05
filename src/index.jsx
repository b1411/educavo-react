import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./components/Context/ContextProvider";
import Parse from "parse";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/main.scss";

const parseServerURL = "https://parseapi.back4app.com/";
Parse.initialize(
  "Nx1rSgIPLD1KwIWZZQU4AlKt023sEf7Y2E4cUgEI",
  "CpkmITpqDsXbNtAVkm8xSScv3XRI1QrW4BVo5D5K"
);
Parse.serverURL = parseServerURL;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);


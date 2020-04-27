import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { BookProvider } from "./Context";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BookProvider>
    <Router>
      <App />
    </Router>
  </BookProvider>,

  document.getElementById("root")
);


serviceWorker.unregister();

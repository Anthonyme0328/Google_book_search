// imports react and react dom our custom ./app route and the service worker
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// renders the app before anything else
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

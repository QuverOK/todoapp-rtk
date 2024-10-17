import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/global.css";

import { BrowserRouter as Router } from "react-router-dom";
import { Routing } from "./pages/routing";
import { Provider } from "react-redux";
import { store } from "./store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routing />
      </Router>
    </Provider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/global.css";

import { BrowserRouter as Router } from "react-router-dom";
import { Routing } from "./pages/routing";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routing />
    </Router>
  </StrictMode>
);

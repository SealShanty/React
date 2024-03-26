import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import StateExample from "./SpongeState";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
    <App/>
        <StateExample />
  </StrictMode>
);
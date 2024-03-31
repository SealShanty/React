import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import StateExample from "./SpongeState";
import NavigationBar from "./NavigationBar";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <NavigationBar />
        <App />
        <StateExample />
    </StrictMode>
);
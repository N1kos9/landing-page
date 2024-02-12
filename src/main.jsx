import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CursorOne } from "cursor-style";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CursorOne delay={10} />
    <App />
  </React.StrictMode>
);

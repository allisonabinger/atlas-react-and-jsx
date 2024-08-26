import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StrictMode } from "react";

// Render the App component to the root element
const div = document.getElementById("root");
const root = ReactDOM.createRoot(div);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CounterProvider } from "./components/hooks/usecontext/CounterProvider";
ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <CounterProvider>
    <App />
  </CounterProvider> 
  </React.StrictMode>
);

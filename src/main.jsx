import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { WeatherContextProvider } from "./context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <WeatherContextProvider>
    <App />
  </WeatherContextProvider>
);

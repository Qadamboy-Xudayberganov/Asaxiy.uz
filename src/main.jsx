import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import BulimlarProvider from "./context/BulimlarContext.jsx";
import ProductProvider from "./context/ProductContext.jsx";
import SavatchaProvider from "./context/SavatchaContext.jsx";
import SevimlilarProvider from "./context/SevimlilarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ProductProvider>
        <BulimlarProvider>
          <SavatchaProvider>
            <SevimlilarProvider>
              <App />
            </SevimlilarProvider>
          </SavatchaProvider>
        </BulimlarProvider>
      </ProductProvider>
    </React.StrictMode>
  </BrowserRouter>
);

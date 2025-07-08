import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  DataContextProviderCategorias,
  DataContextProviderPersonas,
} from "./context/dataContext.jsx";

createRoot(document.getElementById("root")).render(
  <DataContextProviderPersonas>
    <DataContextProviderCategorias>
      <App />
    </DataContextProviderCategorias>
  </DataContextProviderPersonas>
);

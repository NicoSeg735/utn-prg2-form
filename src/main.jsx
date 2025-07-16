import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PersonasContextProvider } from "./contexts/PersonasContext/PersonasProvider.jsx";

createRoot(document.getElementById("root")).render(
  <PersonasContextProvider>
    <App />
  </PersonasContextProvider>
);

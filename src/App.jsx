import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersonaAlta from "./components/PersonaAlta";
import PersonasLista from "./components/PersonasLista";
import Navegacion from "./components/Navegacion";
import "./App.css";

export default function App() {
  return (
    <div className="container-fluid justify-content-center">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-6">
          <BrowserRouter>
            <Navegacion />
            <Routes>
              <Route path="PersonaAlta" element={<PersonaAlta />} />
              <Route path="PersonasLista" element={<PersonasLista />} />
              <Route path="/" element={<PersonasLista />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

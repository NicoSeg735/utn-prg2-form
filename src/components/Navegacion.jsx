import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navegacion() {
  const [navSel, setNavSel] = useState("alta");
  function fncClick(arg) {
    setNavSel(arg);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          PERSONAS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link
                to="/PersonaAlta"
                className="nav-link"
                href="#"
                onClick={() => fncClick("alta")}
              >
                Alta
                <span className="sr-only">
                  {navSel === "alta" && "(Actual)"}
                </span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                to="/PersonasLista"
                className="nav-link"
                href="#"
                onClick={() => fncClick("lista")}
              >
                Lista
                <span className="sr-only">
                  {navSel === "lista" && "(Actual)"}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr></hr>
    </>
  );
}

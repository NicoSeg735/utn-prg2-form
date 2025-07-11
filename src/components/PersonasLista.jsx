import { useState, useContext } from "react";
import { dataContextPersonas } from "../context/dataContext";
import { ToastContainer } from "react-toastify";
import { toast } from "./toast";
import PersonasListaTabla from "./PersonasListaTabla";
import PersonasModif from "./PersonasModif";
import PersonasVer from "./PersonasVer";

export default function PersonasLista() {
  const [vista, setVista] = useState("lista");
  const [id, setId] = useState(0);
  const { contextDataPersonas, setContextDataPersonas } =
    useContext(dataContextPersonas);

  function fncEliminar(id) {
    // borro un ITEM
    setContextDataPersonas(
      contextDataPersonas.filter((persona) => persona.id !== id)
    );
    toast("id:" + id + " eliminado", "error");
  }

  function fncVer(id) {
    setId(id);
    setVista("ver");
  }

  function fncEditar(id) {
    setVista("editar");
    setId(id);
  }

  function fncVolver() {
    setVista("lista");
  }

  return (
    <>
      {vista === "lista" ? (
        <PersonasListaTabla
          contextDataPersonas={contextDataPersonas}
          fncEditar={fncEditar}
          fncEliminar={fncEliminar}
          fncVer={fncVer}
        />
      ) : vista === "editar" ? (
        <PersonasModif
          contextDataPersonas={contextDataPersonas}
          setContextDataPersonas={setContextDataPersonas}
          id={id}
          fncVolver={fncVolver}
        />
      ) : (
        vista === "ver" && (
          <PersonasVer
            contextDataPersonas={contextDataPersonas}
            id={id}
            fncVolver={fncVolver}
          />
        )
      )}

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

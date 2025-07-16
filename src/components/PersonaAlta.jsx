import { useState, useContext } from "react";
import PersonasContext from "../contexts/PersonasContext/PersonasContext";
import { toast } from "./toast";
import { ToastContainer } from "react-toastify";
import PersonasVistaRapida from "./PersonasVistaRapida";
import PersonaForm from "./PersonaForm";

export default function PersonaAlta() {
  
  // personasLista: lista de personas dadas de alta en el corriente proceso de carga batch.
  const [personasLista, setPersonasLista] = useState([]);

  const { agregarPersona } =
    useContext(PersonasContext);

  function fncEnviar(personaSinId) {
    // actualizo en contexto, le agrego la persona ingresada:
    const personaConId = agregarPersona(personaSinId);
    // AGREGO EL NUEVO persona a LA LISTA DE ALTA PARA MOSTRAR ABAJO DEL FORM.
    setPersonasLista([...personasLista, personaConId]);

    toast("Correcto.", "ok");
  }

  return (
    <>
      <PersonaForm
        fncEnviar={fncEnviar}
        isEditing={true}
      />

      {/* Si hay altas, las muestro en la vista  */}
      {personasLista.length > 0 && (
        <PersonasVistaRapida personasLista={personasLista} />
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

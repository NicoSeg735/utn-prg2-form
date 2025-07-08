import { useState } from "react";
import { SkipBack } from "lucide-react";
import PersonaForm from "./PersonaForm";

export default function personaModif({
  contextDataPersonas,
  setContextDataPersonas,
  id,
  fncVolver,
}) {
  // ver como hacerlo en un paso????????????????
  const objPersona = contextDataPersonas.filter((persona) => persona.id === id);
  const [persona, setPersona] = useState(objPersona[0]);

  function fncEnviar(e) {
    e.preventDefault();
    // Disparo el evento submit en PersonaForm. Actualizo los datos.
    setContextDataPersonas(
      contextDataPersonas.map((personaContext) =>
        personaContext.id === persona.id
          ? { ...persona }
          : { ...personaContext }
      )
    );

    fncVolver();
  }

  return (
    <>
      <div className="row align-items-center">
        <div className="col-1">
          <SkipBack onClick={fncVolver} />
        </div>
        <div className="col-8 h4 mt-2">
          Modificar datos {persona.apellido} {persona.nombre}
        </div>
        <div className="col-3"></div>
      </div>

      <PersonaForm
        persona={persona}
        setPersona={setPersona}
        fncEnviar={fncEnviar}
      />
    </>
  );
}

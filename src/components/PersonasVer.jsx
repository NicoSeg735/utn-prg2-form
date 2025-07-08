import { useState } from "react";
import PersonaForm from "./PersonaForm";
import { SkipBack } from "lucide-react";

export default function PersonasVer({ contextDataPersonas, id, fncVolver }) {
  // ver tema arreglo filtrado a objeto? o sigo trabajando con arreglo?
  const objPersona = contextDataPersonas.filter((persona) => persona.id === id);
  const [persona, setPersona] = useState(objPersona[0]);

  return (
    <>
      <div className="row align-items-center">
        <div className="col-1">
          <SkipBack onClick={fncVolver} />
        </div>
        <div className="col-8 h4 mt-2">Consulta ID {persona.id}</div>
        <div className="col-3"></div>
      </div>
      <PersonaForm persona={persona} />
    </>
  );
}

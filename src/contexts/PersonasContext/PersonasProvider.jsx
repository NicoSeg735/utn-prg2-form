import { useState } from "react";
import PersonasContext from "./PersonasContext";

export function PersonasContextProvider(props) {
  const [contextDataPersonas, setContextDataPersonas] = useState([]);

  const getMaxId = () => {
    return contextDataPersonas.reduce((max, persona) => {
      return persona.id > max ? persona.id : max;
    }, 0) + 1;
  };

  const agregarPersona = (personaSinId) => {
    const personaConId = {
      ...personaSinId,
      id: getMaxId(),
    }
    setContextDataPersonas([...contextDataPersonas, personaConId]);
    return personaConId
  };

  return (
    <PersonasContext.Provider
      value={{ contextDataPersonas, setContextDataPersonas, agregarPersona }}
    >
      {props.children}
    </PersonasContext.Provider>
  );
}

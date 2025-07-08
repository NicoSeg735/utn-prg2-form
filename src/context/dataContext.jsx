import { createContext, useState } from "react";

export const dataContextCategorias = createContext();
export const dataContextPersonas = createContext();

export function DataContextProviderCategorias(props) {
  const contextData = [
    { sexo: "F", descripcion: "2DA", categoria: "D2" },
    { sexo: "F", descripcion: "3RA", categoria: "D3" },
    { sexo: "M", descripcion: "3RA", categoria: "C3" },
    { sexo: "M", descripcion: "4TA", categoria: "C4" },
  ];

  const valor = contextData;

  return (
    <dataContextCategorias.Provider value={valor}>
      {props.children}
    </dataContextCategorias.Provider>
  );
}

export function DataContextProviderPersonas(props) {
  const [contextDataPersonas, setContextDataPersonas] = useState([]);

  //const valor = contextDataPersonas;

  return (
    <dataContextPersonas.Provider
      value={{ contextDataPersonas, setContextDataPersonas }}
    >
      {props.children}
    </dataContextPersonas.Provider>
  );
}

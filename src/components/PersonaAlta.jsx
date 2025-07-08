import { useState, useContext, useEffect } from "react";
import { dataContextPersonas } from "../context/dataContext";
import { useToast } from "./useToast";
import { ToastContainer } from "react-toastify";
import PersonasVistaRapida from "./PersonasVistaRapida";
import PersonaForm from "./PersonaForm";

export default function PersonaAlta() {
  const [persona, setPersona] = useState({
    id: "",
    apellido: "",
    nombre: "",
    dni: "",
    fecha_nacimiento: "",
    sexo: "",
    categoria: "",
    telefono: "",
    mail: "",
    observaciones: "",
  });
  // personasLista: lista de personas dadas de alta en el corriente proceso de carga batch.
  const [personasLista, setPersonasLista] = useState([]);
  // uso idMax para llevar el ultimo ID ya que no lo puedo actualizar en la misma renderizacion en que lo agrgo al Context.
  const [idMax, setId] = useState(0);
  const { contextDataPersonas, setContextDataPersonas } =
    useContext(dataContextPersonas);

  useEffect(() => {
    // seteo ID: Lo hago en el montado inicial porque al hacerlo en el mismo evento de Enviar
    // el useState no refleja la actualizacion al momento de modificar el useContext.
    setId(
      contextDataPersonas.reduce((max, persona) => {
        return persona.id > max ? persona.id : max;
      }, 0) + 1
    );
    // agrego el ID maximo del reduce + 1.
    setPersona({
      ...persona,
      id:
        contextDataPersonas.reduce((max, persona) => {
          return persona.id > max ? persona.id : max;
        }, 0) + 1,
    });
  }, []);

  useEffect(() => {});

  function fncEnviar(e) {
    e.preventDefault();

    // VALIDACIONES
    // valido APELLIDO
    if (e.target.apellido.value.length === 0) {
      useToast("Complete el Apellido.", "error");
      return;
    }
    // valido NOMBRE
    if (e.target.nombre.value.length === 0) {
      useToast("Complete el Nombre.", "error");
      return;
    }
    // valido DNI
    if (e.target.dni.value.length === 0) {
      useToast("Complete el Dni.", "error");
      return;
    }
    // valido SEXO
    if (e.target.sexo.value === "") {
      useToast("Complete el Sexo.", "error");
      return;
    }
    // valido TELEFONO
    if (e.target.telefono.value.length === 0) {
      useToast("Complete el Telefono.", "error");
      return;
    }
    // FIN VALIDACIONES

    // AGREGO EL NUEVO persona a LA LISTA DE ALTA PARA MOSTRAR ABAJO DEL FORM.
    setPersonasLista([...personasLista, persona]);
    // actualizo en contexto, le agrego la persona ingresada:
    setContextDataPersonas([...contextDataPersonas, persona]);
    // reseteo el arreglo e incremento el indice
    setId(idMax + 1);

    setPersona({
      ...persona,
      id: idMax + 1,
      apellido: "",
      nombre: "",
      dni: "",
      fecha_nacimiento: "",
      sexo: "",
      categoria: "",
      telefono: "",
      mail: "",
      observaciones: "",
    });

    useToast("Correcto.", "ok");
  }

  return (
    <>
      <PersonaForm
        persona={persona}
        setPersona={setPersona}
        fncEnviar={fncEnviar}
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

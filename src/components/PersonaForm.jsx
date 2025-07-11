import { useState, useContext } from "react";
import { dataContextCategorias } from "../context/dataContext";
import { toast } from "./toast";

export default function PersonaForm({ fncEnviar, isEditing = false }) {
  // categorias: resultado del filtrado por SEXO de contextDataCategorias.
  const [categorias, setCategorias] = useState([]);
  const contextDataCategorias = useContext(dataContextCategorias);

  const [persona, setPersona] = useState({
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

  function fncForm(e) {
    if (isEditing) {
      switch (e.target.id) {
        case "dni":
          if (persona.dni.length == 8) {
            setPersona({
              ...persona,
              [e.target.id]: e.target.value.substring(0, 8),
            });
          } else {
            setPersona({ ...persona, [e.target.id]: e.target.value });
          }
          break;
  
        case "sexo":
          setPersona({
            ...persona,
            [e.target.id]: e.target.value,
            categoria: "",
          });
          setCategorias([
            { descripcion: "Seleccione", categoria: "" },
            ...contextDataCategorias.filter(
              (item) => item.sexo == e.target.value
            ),
          ]);
          // no lo puedo cambia para que vuelva a el OPTION Selecciones
          e.target.selectedIndex = 0;
          break;
        default:
          setPersona({ ...persona, [e.target.id]: e.target.value });
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { apellido, nombre, dni, sexo, telefono } = e.target;

    if (apellido.value.length === 0) {
      toast("Complete el Apellido.", "error");
      return;
    }
    // valido NOMBRE
    if (nombre.value.length === 0) {
      toast("Complete el Nombre.", "error");
      return;
    }
    // valido DNI
    if (dni.value.length === 0) {
      toast("Complete el Dni.", "error");
      return;
    }
    // valido SEXO
    if (sexo.value === "") {
      toast("Complete el Sexo.", "error");
      return;
    }
    // valido TELEFONO
    if (telefono.value.length === 0) {
      toast("Complete el Telefono.", "error");
      return;
    }


    fncEnviar(persona);
  }

  return (
    <div className="container-fluid col-12 mt-4 p-4 ">
      <form name="form1" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-4">
            <label>Apellido</label>
          </div>
          <div className="col-8">
            <input
              type="text"
              id="apellido"
              maxLength="30"
              className="form-control"
              placeholder="Apellido"
              autoComplete="off"
              value={persona.apellido}
              onChange={fncForm}
              disabled={!isEditing}
            ></input>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <label>Nombre</label>
          </div>
          <div className="col-8">
            <input
              type="text"
              id="nombre"
              maxLength="30"
              className="form-control"
              placeholder="Nombre"
              autoComplete="off"
              value={persona.nombre}
              onChange={fncForm}
              disabled={!isEditing}
            ></input>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <label>Dni</label>
          </div>
          <div className="col-8">
            <input
              type="number"
              id="dni"
              className="form-control"
              placeholder="Dni"
              autoComplete="off"
              value={persona.dni}
              onChange={fncForm}
              disabled={!isEditing}
            ></input>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <label>Nacimiento</label>
          </div>
          <div className="col-8">
            <input
              type="date"
              id="fecha_nacimiento"
              className="form-control"
              value={persona.fecha_nacimiento}
              onChange={fncForm}
              disabled={!isEditing}
            ></input>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-4">
            <label>Sexo</label>
          </div>
          <div className="col-8">
            <input
              type="radio"
              id="sexo"
              value="F"
              checked={persona.sexo == "F" ? true : false}
              onChange={fncForm}
              className="form-check-input"
            ></input>
            F&nbsp;&nbsp;
            <input
              type="radio"
              id="sexo"
              value="M"
              checked={persona.sexo == "M" ? true : false}
              onChange={fncForm}
              className="fform-check-input"
            ></input>
            M
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <label>Categoria</label>
          </div>
          <div className="col-8">
            <select id="categoria" className="form-select" onChange={fncForm}>
              {categorias.map((item, index) => (
                <option key={index} value={item.categoria}>
                  {item.descripcion}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-4">
            <label>Teléfono</label>
          </div>
          <div className="col-8">
            <input
              type="phone"
              id="telefono"
              maxlenght="9"
              autoComplete="off"
              value={persona.telefono}
              onChange={fncForm}
              className="form-control"
              placeholder="9 digitos 011..."
            ></input>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-4">
            <label>Mail</label>
          </div>
          <div className="col-8">
            <input
              type="mail"
              id="mail"
              maxlenght="9"
              autoComplete="off"
              value={persona.mail}
              onChange={fncForm}
              className="form-control"
            ></input>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-4">
            <label>Observaciones</label>
          </div>
          <div className="col-8">
            <textarea
              id="observaciones"
              maxlenght="255"
              autoComplete="off"
              value={persona.observaciones}
              onChange={fncForm}
              className="form-control"
            ></textarea>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-4"></div>
          <div className="col-8">
            <button className="btn btn-primary btn-ancho1 btn-sm">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

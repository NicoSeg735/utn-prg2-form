import { SquarePen, Trash2, ZoomIn } from "lucide-react";

export default function PersonasListaTabla({
  contextDataPersonas,
  fncEditar,
  fncEliminar,
  fncVer,
}) {
  return (
    <div className="row mt-4">
      <div className="col-12">
        <table className="table table-bordered bg-tabla">
          <thead>
            <tr>
              <th className="col-1">id</th>
              <th className="col-5">Persona</th>
              <th className="col-1"></th>
              <th className="col-2">Dni</th>
              <th className="col-2">Telefono</th>
              <th className="col-1"></th>
              <th className="col-1"></th>
            </tr>
          </thead>
          <tbody>
            {contextDataPersonas.map((persona, index) => (
              <tr key={index}>
                <td>{persona.id}</td>
                <td>
                  {/* <Link to={/user/${persona.id}}> {persona.apellido}, {persona.nombre} </Link> */}
                  {persona.apellido}, {persona.nombre}
                </td>
                <td>
                  <a href="#">
                    <ZoomIn onClick={() => fncVer(persona.id)} />
                  </a>
                </td>
                <td>{persona.dni}</td>
                <td>{persona.telefono}</td>
                <td>
                  <a href="#">
                    <SquarePen onClick={() => fncEditar(persona.id)} />
                  </a>
                </td>
                <td>
                  <a href="#">
                    <Trash2 onClick={() => fncEliminar(persona.id)} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

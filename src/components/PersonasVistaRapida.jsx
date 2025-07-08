export default function PersonasVistaRapida({ personasLista }) {
  return (
    <div className="row mt-4">
      <div className="col-12">
        <table className="table table-bordered bg-tabla">
          <thead>
            <tr>
              <th className="col-1">id</th>
              <th className="col-5">Persona</th>
              <th className="col-3">Telefono</th>
              <th className="col-3">Categoria</th>
            </tr>
          </thead>
          <tbody>
            {personasLista.map((persona, index) => (
              <tr key={index}>
                <td>{persona.id}</td>
                <td>
                  {persona.apellido}, {persona.nombre}
                </td>
                <td>{persona.telefono}</td>
                <td>{persona.categoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

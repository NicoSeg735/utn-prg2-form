export default function Modal({
  btnLabel = "Launch demo modal",
  fncAceptar,
}) {
    return (
      <>
    <button
      type="button"
      className="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      {btnLabel}
    </button>

    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">Contenido del modal</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button type="button" className="btn btn-primary" onClick={fncAceptar}>
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </div>
      </>
    )
}
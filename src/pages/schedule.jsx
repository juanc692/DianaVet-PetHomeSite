import React from 'react'

export default function schedule() {
  return (
    <div
      className="container py-5"
      style={{ minHeight: '80vh' }}
    >
      <div className="row justify-content-center">

        <div className="col-md-8">

          <div
            className="card shadow border-0"
            style={{
              borderRadius: '20px',
              backgroundColor: '#f8f8f8'
            }}
          >

            <div className="card-body p-5">

              <h2 className="text-center mb-4">
                Agendar cita
              </h2>

              <form>

                <div className="mb-3">
                  <label className="form-label">
                    Nombre del dueño
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingresa tu nombre"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Nombre de la mascota
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre de la mascota"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Servicio
                  </label>

                  <select className="form-select">
                    <option>Veterinaria</option>
                    <option>Baño y secado</option>
                    <option>Vacunación</option>
                  </select>
                </div>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Fecha
                    </label>

                    <input
                      type="date"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Hora
                    </label>

                    <input
                      type="time"
                      className="form-control"
                    />
                  </div>

                </div>

                <div className="mb-4">
                  <label className="form-label">
                    Comentarios
                  </label>

                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Detalles importantes..."
                  ></textarea>
                </div>

                <div className="text-center">

                  <button
                    type="submit"
                    className="btn btn-warning px-5 py-2 rounded-pill shadow"
                  >
                    Confirmar cita
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

import React from 'react'

export default function subHeader() {
  return (
    <>
    <div className='row text-center p-3'>
        <h2>DianaVet & Pet Home</h2>
        <p>Servicios integrales para el cuidado de los seres mas queridos</p>
        <div className='d-flex justify-content-center gap-3'>
            <button className='btn btn-vet'>Agendar Cita</button>
            <button className='btn btn-vet'>Contactar</button>
        </div>
    </div>
    </>
  )
}

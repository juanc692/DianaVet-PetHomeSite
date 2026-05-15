import React from 'react'
import { Link } from 'react-router-dom'

export default function subHeader() {
  return (
    <>
    <div className='row text-center p-3'>
        <h2>DianaVet & Pet Home</h2>
        <p>Servicios integrales para el cuidado de los seres mas queridos</p>
        <div className='d-flex justify-content-center gap-3'>
            <Link to="/agendar-cita"
            className='btn btn-vet'
            >Agendar Cita</Link>
            <button className='btn btn-vet'>Contactar</button>
        </div>
    </div>
    </>
  )
}

import React from 'react'
import Vet from '../assets/veterinaria.png'
import Bath from '../assets/baño.png'
import Vacc from '../assets/vacunacion.png'

export default function OurServices() {
  return (
    <section className='container-fluid py-5' style={{ backgroundColor: '#8fd37c33' }}>
      <div className='container'>
        <h2 className='text-center mb-5'>Nuestros servicios</h2>
        
        <div className='row justify-content-center g-4'>
          
          {/* Servicio 1: Veterinaria */}
          <div className='col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center text-center'>
            <div style={{ maxWidth: '300px' }}>
              <img
                src={Vet}
                alt="Servicio de Veterinaria"
                className="img-fluid mb-3"
                style={{ height: '150px', objectFit: 'contain' }}
              />
              <h5>Veterinaria</h5>
              <p>Cuidamos a tu mascota como familia. Servicios completos y un trato cercano que garantiza su bienestar en todo momento.</p>
            </div>
          </div>

          {/* Servicio 2: Baño */}
          <div className='col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center text-center'>
            <div style={{ maxWidth: '300px' }}>
              <img
                src={Bath}
                alt="Servicio de Baño"
                className="img-fluid mb-3"
                style={{ height: '150px', objectFit: 'contain' }}
              />
              <h5>Baño y secado</h5>
              <p>Deja a tu mascota limpia, fresca y feliz con nuestro servicio de baño y secado, realizado con productos de calidad y cuidado profesional.</p>
            </div>
          </div>

          {/* Servicio 3: Vacunación */}
          <div className='col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center text-center'>
            <div style={{ maxWidth: '300px' }}>
              <img
                src={Vacc}
                alt="Servicio de Vacunación"
                className="img-fluid mb-3"
                style={{ height: '150px', objectFit: 'contain' }}
              />
              <h5>Vacunación</h5>
              <p>Protege la salud de tu mascota con nuestro servicio de vacunación, seguro, oportuno y realizado por profesionales comprometidos con su bienestar.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

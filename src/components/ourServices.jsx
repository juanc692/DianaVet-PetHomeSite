import React from 'react'
import Vet from '../assets/veterinaria.png'
import Bath from '../assets/baño.png'
import Vacc from '../assets/vacunacion.png'

export default function ourServices() {
  return (
    <>
    <div className='row text-center p-3' style={{backgroundColor:'#8fd37c33'}}>
        <h2>Nuestros servicios</h2>
        <div className='d-flex justify-content-center'>
            <div className='mb-3 p-3' style={{ minHeight: '200px',maxWidth:'300px'}}>
                <img
                src={Vet}
                alt="Carta servicios"
                style={{minHeight:'150px'},{width:'100%'}}
                />
                <h5>Veterinaria</h5>
                <p>Cuidamos a tu mascota como familia. servicios completos y un trato cercano que garantiza su bienestar en todo momento.</p>
            </div>
            <div className='mb-3 p-3' style={{ minHeight: '200px',maxWidth:'300px'}}>
                <img
                src={Bath}
                alt="Carta servicios"
                style={{minHeight:'150px'},{width:'100%'}}
                />
                <h5>Baño y secado</h5>
                <p>Deja a tu mascota limpia, fresca y feliz con nuestro servicio de baño y secado, realizado con productos de calidad y cuidado profesional.</p>
            </div>
            <div className='mb-3 p-3' style={{ minHeight: '200px',maxWidth:'300px'}}>
                <img
                src={Vacc}
                alt="Carta servicios"
                style={{minHeight:'150px'},{width:'100%'}}
                />
                <h5>Vacunacion</h5>
                <p>Protege la salud de tu mascota con nuestro servicio de vacunación, seguro, oportuno y realizado por profesionales comprometidos con su bienestar.</p>
            </div>
        </div>
    </div>
    </>
  )
}

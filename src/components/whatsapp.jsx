// import Icon from '../assets/whatsapp_.webp';
// import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
export default function whatsapp() {
  return (
    <a
      href="https://wa.me/573001112233"
      target="_blank"
      rel="noopener noreferrer"
      className="
        position-fixed
        bottom-0
        end-0
        m-4
        btn
        btn-success
        rounded-circle
        shadow
        d-flex
        align-items-center
        justify-content-center
      "
      style={{
        width: '60px',
        height: '60px',
        zIndex: 9999
      }}
    >
      <i className="bi bi-whatsapp fs-2"></i>
    </a>
  )
}

// import React from 'react'
import SubHeader from '../components/subHeader'
import OurServices from '../components/ourServices'
import Comentary from '../components/comentary'
import Productos from '../components/productos'

export default function home() {
  return (
    <>
      <SubHeader />

      <hr className="my-4" />

      <OurServices />

      <hr className="my-4" />

      <Comentary />

      <hr className="my-4" />

      <Productos />
    </>
  )
}

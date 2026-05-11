import React from 'react'
import DogChow from '../assets/dogchow.png'
import leftBtn from '../assets/leftBtn.png'
import rightBtn from '../assets/rightBtn.png'

export default function Productos() {
  return (
    <>
    <div className='row text-center p-3 carousel slide' data-bs-ride="carousel">
        <div className='d-flex justify-content-center align-items-center gap-3 carousel-inner'>
            <div>
                <img src={leftBtn} alt="LeftButton" className='img-fluid btn '/>
            </div>

            <div className='mb-3 p-3 rounded'style={{ minHeight: '200px' ,maxWidth:'300px',backgroundColor:'#D4EEFF'}}>
                <img
                src={DogChow}
                alt="Producto"
                style={{minHeight:'150px'},{width:'100%'}}
                />
                <h5>Dog Chaw 250gr</h5>
                <p>$24000</p>
                <button className='btn btn-vet'>Pedir</button>
            </div>
            <div className='mb-3 p-3 rounded'style={{ minHeight: '200px' ,maxWidth:'300px',backgroundColor:'#D4EEFF'}}>
                <img
                src={DogChow}
                alt="Producto"
                style={{minHeight:'150px'},{width:'100%'}}
                />
                <h5>Dog Chaw 250gr</h5>
                <p>$24000</p>
                <button className='btn btn-vet'>Pedir</button>
            </div>
            <div className='mb-3 p-3 rounded'style={{ minHeight: '200px' ,maxWidth:'300px',backgroundColor:'#D4EEFF'}}>
                <img
                src={DogChow}
                alt="Producto"
                style={{minHeight:'150px'},{width:'100%'}}
                />
                <h5>Dog Chaw 250gr</h5>
                <p>$24000</p>
                <button className='btn btn-vet'>Pedir</button>
            </div>
            <div className='mb-3 p-3 rounded'style={{ minHeight: '200px' ,maxWidth:'300px',backgroundColor:'#D4EEFF'}}>
                <img
                src={DogChow}
                alt="Producto"
                style={{minHeight:'150px'},{width:'100%'}}
                />
                <h5>Dog Chaw 250gr</h5>
                <p>$24000</p>
                <button className='btn btn-vet'>Pedir</button>
            </div>
            
            <div>
                <img src={rightBtn} alt="RightButton" className='img-fluid btn'/>
            </div>
        </div>
    </div>
    </>
  )
}

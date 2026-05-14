import React from 'react'
import Carousel from './carousel'
import DogChow from '../assets/dogchow.png'
import Max from '../assets/max.webp'
import Monelo from '../assets/monelo.webp'
import Adult from '../assets/adultman.webp'
import leftBtn from '../assets/leftBtn.png'
import rightBtn from '../assets/rightBtn.png'

export default function Productos() {

        const Product = ({ src, name, price }) => {
            return (
                <div
                    className='mb-3 p-3 rounded w-100'
                    style={{
                        backgroundColor: '#D4EEFF',
                        maxWidth: '250px'
                    }}
                >
                    <img
                        src={src}
                        alt="Producto"
                        className="img-fluid"
                        style={{
                            minHeight: '150px',
                            objectFit: 'cover'
                        }}
                    />

                    <h5>{name}</h5>

                    <p>${price}</p>

                    <button className='btn btn-vet'>
                        Pedir
                    </button>
                </div>
            );
        };

        const products = [
            {
                src: DogChow,
                name: "Dog Chow 250gr",
                price: 24000
            },
            {
                src: Max,
                name: "Max",
                price: 20000
            },
            {
                src: Monelo,
                name: "Monelo",
                price: 18000
            },
            {
                src: Adult,
                name: "Adult",
                price: 22200
            }
        ];

  return (
    <>
    <section id='PRODUCTS' className='row text-center p-3'>
        <h2 className='p-3'>Nuestros productos</h2>
        <Carousel>
            {products.map((product, index) => (
                <div
                    key={index}
                    className="w-100 d-flex justify-content-center"
                >
                    <Product
                        src={product.src}
                        name={product.name}
                        price={product.price}
                    />
                </div>
            ))}
        </Carousel>
    </section>
    </>
  )
}

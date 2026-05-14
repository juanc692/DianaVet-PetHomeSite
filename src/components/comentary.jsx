import React from 'react'
import leftBtn from '../assets/leftBtn.png'
import rightBtn from '../assets/rightBtn.png'
import googleComment from '../assets/googleComment.png'
import Comment from './comment'
import Carousel from './carousel'

export default function comentary() {
    const comments = [
    {
        author: "Leyda Conde",
        date: "2025-05-24",
        rating: 5,
        text: "Un excelente servicio y asesoría, cumplen con los tiempos de entrega",
        avatar: "L",
        verified: true
    },
    {
        author: "Carlos Ruiz",
        date: "2025-05-20",
        rating: 4,
        text: "Muy buena atención y rapidez",
        avatar: "C",
        verified: true
    },
    {
        author: "Leyda Conde",
        date: "2025-05-24",
        rating: 5,
        text: "Un excelente servicio y asesoría, cumplen con los tiempos de entrega",
        avatar: "L",
        verified: true
    },
    {
        author: "Leyda Conde",
        date: "2025-05-24",
        rating: 5,
        text: "Un excelente servicio y asesoría, cumplen con los tiempos de entrega",
        avatar: "L",
        verified: true
    },
    {
        author: "Leyda Conde",
        date: "2025-05-24",
        rating: 5,
        text: "Un excelente servicio y asesoría, cumplen con los tiempos de entrega",
        avatar: "L",
        verified: true
    }
];
  return (
    <>
    <div className='row text-center p-3' style={{backgroundColor:'#C5FDC5'}}>
        {/* <div className='d-flex justify-content-center align-items-center'></div> */}
        <Carousel>

            {comments.map((comment, index) => (

                <Comment
                    key={index}
                    author={comment.author}
                    date={comment.date}
                    rating={comment.rating}
                    text={comment.text}
                    avatar={comment.avatar}
                    verified={comment.verified}
                />

            ))}

        </Carousel>
    </div>
    </>
  )
}

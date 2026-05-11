import React from 'react'
import leftBtn from '../assets/leftBtn.png'
import rightBtn from '../assets/rightBtn.png'
import googleComment from '../assets/googleComment.png'

export default function comentary() {
  return (
    <>
    <div className='row text-center p-3' style={{backgroundColor:'#C5FDC5'}}>
        <div className='d-flex justify-content-center align-items-center'>
            <div>
                <img src={leftBtn} alt="LeftButton" className='img-fluid btn'/>
            </div>

            <div className='mb-3 p-3'style={{ minHeight: '300px' }}>
                <img
                src={googleComment}
                alt="Comentario google"
                style={{minHeight:'150px'},{minWidth:'300px'}}
                />
            </div>
            <div className='mb-3 p-3'style={{ minHeight: '300px' }}>
                <img
                src={googleComment}
                alt="Comentario google"
                style={{minHeight:'150px'},{minWidth:'300px'}}
                />
            </div>
            <div className='mb-3 p-3'style={{ minHeight: '300px' }}>
                <img
                src={googleComment}
                alt="Comentario google"
                style={{minHeight:'150px'},{minWidth:'300px'}}
                />
            </div>

            <div>
                            <img src={rightBtn} alt="RightButton" className='img-fluid btn'/>
            </div>
        </div>
    </div>
    </>
  )
}

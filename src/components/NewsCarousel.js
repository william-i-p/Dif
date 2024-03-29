import React from 'react'
import matrimonialImg from '../img/home-tracking/platicasPrematiminiales.jpg'
import serviciosImg from '../img/home-tracking/servicesBanner.png'
import iteiIMG from '../img/home-tracking/difusion-red.jpg'

import { Link } from 'react-router-dom'

const carouselImages = [
   {
      id: 1,
      src: iteiIMG,
      alt: 'Difusión de Red Banner',
   },
   {
      id: 2,
      src: serviciosImg,
      alt: 'Servicios de Dif Jocotepec',
      linkTo: '/Servicios',
   },
   {
      id: 3,
      src: matrimonialImg,
      alt: 'Requisitos del Curso Prematrimonial',
   },
]

function NewsCarousel() {
   return (
      <div className='row'>
         <div
            id='carouselExampleIndicators'
            className='carousel slide'
            data-ride='carousel'
         >
            <ol className='carousel-indicators'>
               {carouselImages.map((_, i) => (
                  <li
                     data-target='#carouselExampleIndicators'
                     data-slide-to={i}
                     className='active'
                  />
               ))}
            </ol>
            
            <div className='carousel-inner'>
               {carouselImages.map((item, i) => {
                  const isActive = i === 0
                  const className = `carousel-item ${isActive ? 'active' : ''}`

                  if (!item.linkTo) {
                     return (
                        <div key={item.id} className={className}>
                           <img
                              className='d-block w-100'
                              src={item.src}
                              alt={item.alt}
                           />
                        </div>
                     )
                  }

                  return (
                     <Link className={className} key={item.id} to={item.linkTo}>
                        <img
                           className='d-block w-100'
                           src={item.src}
                           alt={item.alt}
                        />
                     </Link>
                  )
               })}
            </div>
            <a
               className='carousel-control-prev'
               href='#carouselExampleIndicators'
               role='button'
               data-slide='prev'
            >
               <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'
               ></span>
               <span className='sr-only'>Previous</span>
            </a>
            <a
               class='carousel-control-next'
               href='#carouselExampleIndicators'
               role='button'
               data-slide='next'
            >
               <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
               ></span>
               <span className='sr-only'>Next</span>
            </a>
         </div>
      </div>
   )
}

export default NewsCarousel

import React from 'react'
//import inapam from '../img/home-tracking/tarjeta60ymas.jpg'
import matriminial from '../img/home-tracking/platicasPrematiminiales.jpg'

function BannerNoticias() {
   return (
      <div className='row'>
         <div
            id='carouselExampleIndicators'
            className='carousel slide'
            data-ride='carousel'
         >
            <ol className='carousel-indicators'>
               
            </ol>
            <div className='carousel-inner'>

               <div className='carousel-item active'>
                  <img
                     className='d-block w-100'
                     src={matriminial}
                     alt='Second slide'
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default BannerNoticias

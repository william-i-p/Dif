import React from 'react'
import servicesBanner from '../../img/home-tracking/servicesBanner.png'
import { Link } from 'react-router-dom'

export default function ServicesBanner() {
   return (
      <Link to='/Servicios'>
         <section className='tracking_product_area sec_pad services-banner'>
            <div className='container text-center services-banner'>
               <h3 className='services-title'>SERVICIOS</h3>
               <br></br>
            </div>
            <div className='container'>
               <div className='row'>
                  <div
                     id='carouselExampleIndicators'
                     className='carousel slide'
                     data-ride='carousel'
                  >
                     <ol className='carousel-indicators'></ol>
                     <div className='carousel-inner'>
                        <div className='carousel-item active'>
                           <img
                              className='d-block w-100'
                              src={servicesBanner}
                              alt='Second slide'
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </Link>
   )
}

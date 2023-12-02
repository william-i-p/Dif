import React, { Component } from 'react'

class Partner extends Component {
   render() {
      var { pClass, pClasst } = this.props
      return (
         <section className={`${pClass}`}>
            <div className='container'>
               <div className={`partner_logo_area_four ${pClasst}`}>
                  {/*<h4 className="f_size_18 f_400 f_p text-center l_height28 mb_70">Market leaders use app to nrich their brand & business.</h4> */}
                  <div className='row partner_info'>
                     <div>
                        <a href='https://www.itei.org.mx/v4/' target='_blank'>
                           <img
                              className='altura'
                              src={require('../img/home-tracking/itei.jpg')}
                              alt=''
                           />
                        </a>
                     </div>

                     <div data-wow-delay='0.4s'>
                        <a
                           href='https://consultapublicamx.plataformadetransparencia.org.mx'
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           <img
                              alt='PNT logo'
                              src={require('../img/home-tracking/PNT-logo.png')}
                              style={{
                                 height: 250,
                              }}
                           />
                        </a>
                     </div>

                     <div data-wow-delay='0.5s'>
                        <a
                           href='https://consultapublicamx.plataformadetransparencia.org.mx/vut-web/?idSujetoObigadoParametro=2480&idEntidadParametro=14'
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           <img
                              alt='Obligaciones'
                              src={require('../img/home-tracking/obligaciones.png')}
                              style={{
                                 height: 200,
                              }}
                           />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      )
   }
}

export default Partner

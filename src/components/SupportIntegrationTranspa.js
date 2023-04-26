import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SupportIntegrationTranspa extends Component {
   constructor() {
      super();
      this.state = {
         integrationItem: [
            {
               id: 100,
               iImage: 'articulo8.png',
               text: 'Articulo 8',
               link: 'https://portaltransparencia.jocotepec.gob.mx/informacion/2733',
            },
            {
               id: 101,
               iImage: 'agenda.png',
               text: 'Agenda',
               link: 'https://portaltransparencia.jocotepec.gob.mx/informacion/2798',
            },
            {
               id: 102,
               iImage: 'nomina.png',
               text: 'Nómina',
               link: 'https://portaltransparencia.jocotepec.gob.mx/informacion/2785',
            },
            {
               id: 103,
               iImage: 'aviso-de-privacidad.png',
               text: 'Aviso de Privacidad',
               isInternal: true,
               link: '/AvisoPrivacidad',
            },
            {
               id: 104,
               iImage: 'organigrama.png',
               text: 'Organigrama',
               link: 'https://portaltransparencia.jocotepec.gob.mx/informacion/2783',
            },
            {
               id: 105,
               iImage: 'directorio.png',
               text: 'Directorio',
               link: 'https://portaltransparencia.jocotepec.gob.mx/informacion/2746',
            },
         ],
      };
   }

   render() {
      return (
         <section className='support_integration_area'>
            <div className='container'>
               {/* <Sectitle sClass="sec_title text-center mb_70" Title='Software Integrations' TitleP='Why I say old chap that is spiffing lavatory chip shop gosh off his nut, smashing boot are you taking the piss posh loo brilliant matie boy.!'/> */}
               <div className='row flex-row-reverse'>
                  <div className='col-12'>
                     <div className='row'>
                        {this.state.integrationItem.map((post) => {
                           if (post.isInternal) {
                              return (
                                 <div
                                    className='col-lg-6 col-md-6 col-sm-6'
                                    key={post.id}
                                 >
                                    <Link
                                       to={post.link}
                                       className='s_integration_item bg-brand'
                                    >
                                       <img
                                          src={require('../img/new-home/' +
                                             post.iImage)}
                                          alt=''
                                       />
                                       <h5 className="text-white">{post.text}</h5>
                                    </Link>
                                 </div>
                              );
                           }

                           return (
                              <div
                                 className='col-lg-6 col-md-6 col-sm-6'
                                 key={post.id}
                              >
                                 <a
                                    href={post.link}
                                    className='s_integration_item bg-brand'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                    <img
                                       src={require('../img/new-home/' +
                                          post.iImage)}
                                       alt=''
                                    />
                                    <h5 className="text-white">{post.text}</h5>
                                 </a>
                              </div>
                           );
                        })}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default SupportIntegrationTranspa;

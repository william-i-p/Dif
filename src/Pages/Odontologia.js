import React from 'react'
import CustomNavbar from '../components/CustomNavbar'
import Breadcrumb from '../components/Breadcrumb'
import FooterTwo from '../components/Footer/FooterTwo'
import FooterData from '../components/Footer/FooterData'
import Partner from '../components/Partner'
import GoogleMaps from '../components/Features/GoogleMaps'
import BreadcrumbServ from '../components/BreadcrumbServ'

const Odontologia = () => {
   return (
      <div className='body_wrapper'>
         <CustomNavbar
            mClass='menu_tracking'
            nClass='mr-auto'
            hbtnClass='tracking_btn'
         />
         {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Odontología" Pdescription="" imgServ="home4/dentista.png"/> */}
         <BreadcrumbServ
            breadcrumbClass='breadcrumb_area'
            imgName='breadcrumb/banner_bg.png'
            Ptitle='Odontología'
            Pdescription=''
            imgServ='new-home/dentista.png'
         />

         <div className='container process_area  sec_pad pl-30 pr-30 mt_90 mb_20'>
            <div className='features_info text-center responsivomovil'>
               <div>
                  <h3>OBJETIVO</h3>
               </div>
               <div>
                  <p className='text-justify'>
                     DIF Jocotepec tiene el propósito e intención de crear una
                     cultura de prevención y atención oportuna en cuanto a
                     enfermedades bucodentales asi como generar hábitos de
                     higiene ofreciendo servicios dentales a bajo costo, como
                     consultas odontológicas, extracciones, limpiezas dentales y
                     obturaciones con resina; además de ofrecer servicios
                     especializados realizados por especialistas pensando
                     siempre en el beneficio para la población de bajos
                     recursos.
                  </p>
               </div>
            </div>
         </div>

         <div className='container process_area  sec_pad pl-30 pr-30 mt_90 mb_20'>
            <div className='features_info text-center responsivomovil'>
               <div className='pb-5'>
                  <h3>COSTOS</h3>
               </div>

               <table className='table table-borderless mt-5 m-auto'>
                  <thead>
                     <tr>
                        <th scope='col' className='col-6'>
                           Servicio
                        </th>
                        <th scope='col' className='col-6'>
                           Costo
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>Consulta</td>
                        <td>$80.00 mxn</td>
                     </tr>
                     <tr>
                        <td>Limpieza</td>
                        <td>$250.00 mxn</td>
                     </tr>
                     <tr>
                        <td>Obturación con resina</td>
                        <td>$300.00 mxn</td>
                     </tr>

                     <tr>
                        <td>Extracción simple</td>
                        <td>$300.00 mxn</td>
                     </tr>

                     <tr>
                        <td>Curación provisional</td>
                        <td>$150.00 mxn</td>
                     </tr>
                  </tbody>
               </table>

               <p className='text-center mt-5'>
                  *Los costos del tratamiento pueden variar dependiendo de la
                  situación especifica de cada paciente*
               </p>
            </div>
         </div>

         <div className='row'>
            <div className='container text-center pt_160 sec_pad_b'>
               <h3>MAPA DEL CENTRO DE ATENCIÓN:</h3>
               <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.483121180778!2d-103.4301467!3d20.2802604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f5c0b65207689%3A0xd73d3f80d12733cb!2sDonato%20Guerra%20Pte.%2022%2C%20Unidad%20Deportiva%20Sur%2C%2045800%20Jocotepec%2C%20Jal.!5e0!3m2!1ses!2smx!4v1656043151393!5m2!1ses!2smx'
                  width='600'
                  height='450'
               ></iframe>
            </div>
         </div>

         <div className='container process_area  sec_pad pl-30 pr-30 mt_20 mb_90'>
            <div className='features_info text-center responsivomovil'>
               <h3>DATOS DE CONTACTO:</h3>
               <h2>Dirección:</h2>
               <p>Donato Guerra oriente #22</p>
               <h2>Horario:</h2>
               <p>Lunes a Viernes de 8:00 a 14:30 horas</p>
               <h2>Teléfono:</h2>
               <a href='tel:3877632799'>387 763 27 99</a>
            </div>
         </div>

         <Partner pClass='partner_logo_area_two' pClasst='pt-0 mb-0' />
         {/**esta es la parte de los logos de la dependencia */}
         <FooterTwo fClass='pt_150' FooterData={FooterData} />
      </div>
   )
}

export default Odontologia

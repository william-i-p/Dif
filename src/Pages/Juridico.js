import React from 'react'
import CustomNavbar from '../components/CustomNavbar'
import Breadcrumb from '../components/Breadcrumb'
import FooterTwo from '../components/Footer/FooterTwo'
import FooterData from '../components/Footer/FooterData'
import Partner from '../components/Partner'
import BreadcrumbServ from '../components/BreadcrumbServ'

const Juridico = () => {
   return (
      <div className='body_wrapper'>
         <CustomNavbar
            mClass='menu_tracking'
            nClass='mr-auto'
            hbtnClass='tracking_btn'
         />
         {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle=" Asesoría Juridica" Pdescription=""/> */}
         <BreadcrumbServ
            breadcrumbClass='breadcrumb_area'
            imgName='breadcrumb/banner_bg.png'
            Ptitle='Asesoría Jurídica'
            Pdescription=''
            imgServ='home4/juridico.png'
         />

         <div className='container process_area  sec_pad pl-30 pr-30 mt_90 mb_20'>
            <div className='features_info text-center responsivomovil'>
               <div>
                  <h3>OBJETIVO</h3>
               </div>
               <div>
                  <p className='text-center'>
                     Conscientes de las multiples vivencias del entorno
                     familiar, DIF Jocotepec otorgar asesorías y orientaciones
                     jurídicas, así como la atención directa de casos
                     jurídico-familiares a las personas que presenten y
                     soliciten el servicio procurando y atendiendo siempre el
                     bienestar de los ciudadanos.
                  </p>
               </div>
            </div>
         </div>

         <div className='container process_area  sec_pad pl-30 pr-30 mb_20'>
            <div className='features_info text-center responsivomovil'>
               <div className='pb-5'>
                  <h3>COSTOS</h3>
               </div>

               <table class='table table-borderless mt-5 m-auto'>
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
                        <td>Asesoría Jurídica</td>
                        <td>$80.00 mxn</td>
                     </tr>

                     <tr>
                        <td>Testimoniales</td>
                        <td>$300.00 mxn</td>
                     </tr>

                     <tr>
                        <td>Constancia de Avenimiento</td>
                        <td>$2,000.00 mxn</td>
                     </tr>

                     <tr>
                        <td>Constancia Prematrimonial (viernes)</td>
                        <td>$250.00 mxn</td>
                     </tr>

                     <tr>
                        <td>Constancia Prematrimonial (lunes - jueves)</td>
                        <td>$500.00 mxn</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>

         <div className='row'>
            <div className='container text-center pt_160 sec_pad_b'>
               <h3>MAPA DEL CENTRO DE ATENCIÓN:</h3>
               <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.3369660319595!2d-103.43261758507965!3d20.28631488640522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f5bf570930269%3A0x1ece9fa45e10c2dc!2sC.%20Hidalgo%20Eje%20Sur%206%2C%20Jocotepec%20Centro%2C%2045800%20Jocotepec%2C%20Jal.!5e0!3m2!1ses!2smx!4v1652996368960!5m2!1ses!2smx'
                  width='600'
                  height='450'
               ></iframe>
            </div>
         </div>

         <div className='container process_area  sec_pad pl-30 pr-30 mt_20 mb_90'>
            <div className='features_info text-center responsivomovil'>
               <h3>DATOS DE CONTACTO:</h3>
               <h2>Dirección:</h2>
               <a>Calle Hidalgo #6 Centro, Jocotepec</a>
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

export default Juridico

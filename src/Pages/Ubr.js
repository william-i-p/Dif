import React from 'react'
import CustomNavbar from '../components/CustomNavbar'
import Breadcrumb from '../components/Breadcrumb'
import FooterTwo from '../components/Footer/FooterTwo'
import FooterData from '../components/Footer/FooterData'
import Partner from '../components/Partner'
import BreadcrumbServ from '../components/BreadcrumbServ'

const Ubr = () => {
   return (
      <div className='body_wrapper'>
         <CustomNavbar
            mClass='menu_tracking'
            nClass='mr-auto'
            hbtnClass='tracking_btn'
         />
         {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Unidad Básica de Rehabilitación" Pdescription=""/> */}
         <BreadcrumbServ
            breadcrumbClass='breadcrumb_area'
            imgName='breadcrumb/banner_bg.png'
            Ptitle='Unidad Básica de Rehabilitación'
            Pdescription=''
            imgServ='home4/ubr.png'
         />

         <div className='container process_area  sec_pad pl-30 pr-30 mt_90 mb_20'>
            <div className='features_info text-center responsivomovil'>
               <div>
                  <h3>OBJETIVO</h3>
               </div>
               <div>
                  <p className='text-center'>
                     En DIF Jocotepec, a través de su unidad básica de
                     rehabilitación, ponemos a su servicio la atención de
                     pacientes que presente algún tipo de discapacidad física ya
                     sea temporal o permanente; brindada a traves de un conjunto
                     de medios y técnicas especializadas, con la finalidad de
                     ayudar, mejorar o readaptar al individuo discapacitado a la
                     reincorporación de su vida cotidiana y ser un individuo
                     autónomo en su vida personal, familiar y social.
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
                        <td>Sesión de rehabilitación</td>
                        <td>$150.00 mxn</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>

         <div className='row'>
            <div className='container text-center pt_160 sec_pad_b'>
               <h3>MAPA DEL CENTRO DE ATENCIÓN:</h3>
               <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.514755943065!2d-103.4293579!3d20.278949700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f5c0cbd22f6cb%3A0x1506edb3d59761bb!2sMatamoros%20Sur%20330%2C%20Unidad%20Deportiva%20Sur%2C%2045800%20Jocotepec%2C%20Jal.!5e0!3m2!1ses!2smx!4v1652998508099!5m2!1ses!2smx'
                  width='600'
                  height='450'
               />
            </div>
         </div>

         <div className='container process_area  sec_pad pl-30 pr-30 mt_20 mb_90'>
            <div className='features_info text-center responsivomovil'>
               <h3>DATOS DE CONTACTO:</h3>
               <h2>Dirección:</h2>
               <p>Matamoros sur # 330 a espaldas de la cruz verde</p>
               <h2>Horario:</h2>
               <p>Lunes a Viernes de 8:30 a 15:00 horas, (previa cita)</p>
               <h2>Teléfono:</h2>
               <a href='tel:877633300'>87 763 33 00</a>
            </div>
         </div>

         <Partner pClass='partner_logo_area_two' pClasst='pt-0 mb-0' />
         {/**esta es la parte de los logos de la dependencia */}
         <FooterTwo fClass='pt_150' FooterData={FooterData} />
      </div>
   )
}

export default Ubr
